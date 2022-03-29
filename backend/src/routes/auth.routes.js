const { Router } = require('express')
const router = Router()
const controller = require('../controllers/auth.controller')
const path = require('path')
const multer = require('multer')
const public = require('../middlewares/public.middleware')
const user = require('../middlewares/auth.middleware')
const registerV = require('../middlewares/validations/register.validation')
const loginV = require('../middlewares/validations/login.validation')

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) =>
        {
            cb(null, './public/images/users')
        },
        filename: (req, file, cb) =>
        {
            const newFilename = Date.now() + path.extname(file.originalname)
            cb(null, newFilename)
        }
    }
)
const upload = multer({ storage })

router.route('/register').get(public, controller.renderRegister).post(public, upload.single('image'), registerV, controller.register)
router.route('/profile').get(user, controller.renderProfile)
router.route('/login').get(public, controller.renderLogin).post(public, loginV, controller.login)
router.route('/logout').get(controller.logout)

module.exports = router