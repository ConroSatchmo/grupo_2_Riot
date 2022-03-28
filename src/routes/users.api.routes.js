const { Router } = require('express')
const router = Router()
const controller = require('../controllers/users.api.controller')

router.route('/').get(controller.get)
router.route('/:id').get(controller.getById)

module.exports = router