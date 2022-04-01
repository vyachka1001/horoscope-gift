const Router = require('express')
const router = new Router()
const certificateController = require('../controllers/controller-certificate')
 
router.post('/', certificateController.create)
router.get('/:id', certificateController.getOne)
router.get('/', certificateController.getAll)

module.exports = router

