const Router = require('express')
const router = new Router()
const certificateRouter = require('./route-certificate')
const userRouter = require('./route-user')
const catalogCategoryRouter = require ('./route-catalog-category')


router.use('/user', userRouter)
router.use('/certificate', certificateRouter)
router.use('/catalog-category', catalogCategoryRouter)

module.exports = router 