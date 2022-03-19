const { Router } = require('express')
const router = Router()
const controller = require('../controllers/products.controller')
const multer = require('multer')
const admin = require('../middlewares/admin.middleware')

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) =>
        {
            cb(null, './images/products')
        },
        filename: (req, file, cb) =>
        {
            const newFilename = Date.now() + path.extname(file.originalname)
            cb(null, newFilename)
        }
    }
)
const upload = multer({ storage })

router.route('/').get()
router.route('/create').get(admin, controller.renderCreate).post(admin, upload.array('images'), controller.create)
router.route('/:id').get(controller.renderDetail)
router.route('/edit/:id').get(admin, controller.renderEdit).put(admin, upload.array('images'), controller.update)
router.route('/delete/:id').get(admin, controller.renderDelete).delete(admin, controller.delete)

module.exports = router