const { Router } = require("express");
const router = Router();

const userController = require("../controllers/users");

router.get("/login", userController.renderLogin);
router.get("/register", userController.renderRegister);

module.exports = router;
