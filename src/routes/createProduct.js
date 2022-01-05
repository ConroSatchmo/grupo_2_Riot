const { Router } = require("express");
const router = Router();
const multer = require("multer");
const createProductController = require("../controllers/createProduct");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/products"));
  },
  filename: (req, file, cb) => {
    const newFilename =
      "product-" + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});
const upload = multer({ storage });

/*** CREATE ***/
router.post("/", upload.array("imagen"), createProductController.store);

/*** EDIT ***/
router.get("/edit/:id", createProductController.edit);
router.put("/edit/:id", upload.array("imagen"), createProductController.update);

/*** DELETE ***/
router.delete("/:id", createProductController.delete);

module.exports = router;
