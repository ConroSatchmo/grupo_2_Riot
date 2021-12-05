const { Router } = require("express");
const router = Router();

const productDetailController = require("../controllers/productDetail");

router.get("/", productDetailController.renderProductDetail);

module.exports = router;
