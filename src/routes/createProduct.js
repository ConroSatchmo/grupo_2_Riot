const { Router } = require("express");
const router = Router();

const createProductController = require("../controllers/createProduct");

router.get("/", createProductController.renderCreateProduct);

module.exports = router;
