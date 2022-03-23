const { Router } = require('express')
const router = Router()
const controller = require('../controllers/home.controller')
const user = require('../middlewares/auth.middleware')

router.route('/').get(controller.index)
router.route('/checkout').get(user, controller.renderCart)

module.exports = router