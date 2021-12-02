const { Router } = require("express");
const router = Router();

const productCartController = require("../controllers/productCart");

router.get("/", productCartController.renderProductCart);

module.exports = router;
