const { Router } = require('express')
const router = Router()
const controller = require('../controllers/home.controller')

router.route('/').get(controller.index)

module.exports = router