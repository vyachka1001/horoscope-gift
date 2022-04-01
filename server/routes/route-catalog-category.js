const Router = require('express')
const router = new Router()
const catalogCategoryController = require ('../controllers/controller-catalog-category')

router.post('/', catalogCategoryController.create)
router.get('/', catalogCategoryController.getOne)

module.exports = router

