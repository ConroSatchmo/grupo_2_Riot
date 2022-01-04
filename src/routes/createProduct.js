const { Router } = require("express");
const router = Router();

const createProductController = require("../controllers/createProduct");

router.get("/", createProductController.render);
router.post("/", createProductController.store);

module.exports = router;
