const { Router } = require("express");
const path = require("path");
const router = Router();
const multer = require("multer");
const createProductController = require("../controllers/createProduct");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/productos/"));
  },
  filename: (req, file, cb) => {
    const newFilename = file.originalname;
    cb(null, newFilename);
  },
});

const upload = multer({ storage });

/*** CREATE ***/
router.post("/", upload.array("imagen"), createProductController.store);

/*** EDIT ***/
router.put("/edit/:id", upload.array("imagen"), createProductController.update);

/*** DELETE ***/
router.delete("/:id", createProductController.delete);

module.exports = router;
