const { Router } = require("express");
const path = require("path");
const router = Router();
const multer = require("multer");
const createProductController = require("../controllers/createProduct");

router.get("/", createProductController.render);
router.post("/", createProductController.store);
router.put("/", createProductController.edit);
router.delete("/", createProductController.delete);

module.exports = router;
