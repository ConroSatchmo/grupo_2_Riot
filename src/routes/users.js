const { Router } = require("express");
const router = Router();

const userController = require("../controllers/users");

router.get("/", homeController.renderHome);

module.exports = router;
