const { Router } = require("express");
const router = Router();

const productsController = require("../controllers/products");

router.get("/", productsController.renderProducts);
router.get("/create", productsController.renderProductCreate);
router.get("/:id", productsController.renderProductDetail);
router.get("/edit/:id", productsController.renderProductEdit);

module.exports = router;
