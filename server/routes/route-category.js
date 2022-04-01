const Router = require('express')
const router = new Router()
const categoryController = require ('../controllers/controller-category')

router.post('/', categoryController.create)
router.get('/', categoryController.getAll)

module.exports = router

