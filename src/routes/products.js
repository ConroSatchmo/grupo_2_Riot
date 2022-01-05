const { Router } = require("express");
const router = Router();

const productsController = require("../controllers/products");

router.get("/", productsController.renderProducts);
router.get("/create", productsController.renderProductCreate);
router.get("/:id", productsController.renderProductDetail);

module.exports = router;
