const { Router } = require("express");
const router = Router();
const path = require("path");
const multer = require("multer");
const createProductController = require("../controllers/createProduct");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/images/productos"));
    },
    filename: (req, file, cb) => {
      const newFilename = file.originalname;
      cb(null, newFilename);
    },
});

const upload = multer({ storage });

const productsController = require("../controllers/products");

router.get("/", productsController.renderProducts);
router.get("/create", productsController.renderProductCreate);
router.get("/:id", productsController.renderProductDetail);
router.get("/edit/:id", productsController.renderProductEdit);

/*** CREATE ***/
router.post("/", upload.array("imagen"), createProductController.store);

/*** EDIT ***/
router.put("/:id", upload.array("imagen"), createProductController.update);

/*** DELETE ***/
router.delete("/:id", createProductController.delete);

module.exports = router;
