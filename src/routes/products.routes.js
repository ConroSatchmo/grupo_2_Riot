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

router.route('/').get(controller.renderProducts)
router.route('/create').get(admin, controller.renderCreate).post(admin, upload.array('images'), controller.create)
router.route('/dashboard').get(admin, controller.renderDashboard)
router.route('/:id/delete').get(admin, controller.renderDelete).delete(admin, controller.delete)
router.route('/:id/edit').get(admin, controller.renderEdit).put(admin, upload.array('images'), controller.update)
router.route('/:id').get(controller.renderDetail)

module.exports = router