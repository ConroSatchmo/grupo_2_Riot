const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");

const guestMiddleware = require("../middlewares/guestMiddleware");
const userLogedMiddleware = require("../middlewares/userMiddleware");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/public/images/users/");
    },
    filename: (req, file, cb) => {
        const newFilename = Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

const userController = require("../controllers/users");

router.get("/login", userLogedMiddleware, userController.renderLogin);
router.get("/register", userLogedMiddleware, userController.renderRegister);
router.get('/logout', userController.logout);

router.post('/register', upload.single('avatar'), userController.register);
router.post('/login', userController.login);

module.exports = router;
