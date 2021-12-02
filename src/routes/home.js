const { Router } = require("express");
const router = Router();

const homeController = require("../controllers/home");

router.get("/", homeController.renderHome);

module.exports = router;
