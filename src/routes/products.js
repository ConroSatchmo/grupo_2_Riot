const { Router } = require("express");
const router = Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/productos"));
  },
  filename: (req, file, cb) => {
    const newFilename = Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

const upload = multer({ storage });

const productsController = require("../controllers/products");

router.get("/", productsController.renderProducts);
router.get("/create", productsController.renderProductCreate);
router.get("/:id", productsController.renderProductDetail);
router.get("/edit/:id", productsController.renderProductEdit);
router.get("/delete/:id", productsController.renderDelete);

/*** CREATE ***/
router.post("/", upload.array("imagen"), productsController.store);

/*** EDIT ***/
router.put("/:id", upload.array("imagen"), productsController.update);

/*** DELETE ***/
router.delete("/:id", productsController.delete);

module.exports = router;
