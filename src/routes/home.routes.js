const { Router } = require('express')
const router = Router()
const controller = require('../controllers/home.controller')

router.route('/').get(controller.index)
router.route('/checkout').get(controller.renderCart)

module.exports = router