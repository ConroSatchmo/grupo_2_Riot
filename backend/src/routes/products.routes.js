const { Router } = require('express')
const router = Router()
const controller = require('../controllers/products.controller')
const multer = require('multer')
const admin = require('../middlewares/admin.middleware')
const createV = require('../middlewares/validations/create.validation')
const editV = require('../middlewares/validations/edit.validation')
const path = require('path')

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) =>
        {
            cb(null, './public/images/products')
        },
        filename: (req, file, cb) =>
        {
            console.log(file)
            const newFilename = Date.now() +'_'+ file.originalname + path.extname(file.originalname)
            cb(null, newFilename)
        }
    }
)
const upload = multer({ storage })

router.route('/').get(controller.renderProducts)
router.route('/create').get(admin, controller.renderCreate).post(admin, upload.array('images'), createV, controller.create)
router.route('/dashboard').get(admin, controller.renderDashboard)
router.route('/:id/delete').get(admin, controller.renderDelete).delete(admin, controller.delete)
router.route('/:id/edit').get(admin, controller.renderEdit).put(admin, upload.array('images'), editV, controller.update)
router.route('/:id').get(controller.renderDetail)

module.exports = router