const { Router } = require("express");
const router = Router();

const authController = require("../controllers/auth");

router.get("/login", authController.renderLogin);
router.get("/register", authController.renderRegister);

module.exports = router;
