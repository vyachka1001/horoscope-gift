const Router = require('express')
const router = new Router()
const certificateRouter = require('./route-certificate')
const userRouter = require('./route-user')
const categoryRouter = require ('./route-category')


router.use('/user', userRouter)
router.use('/certificate', certificateRouter)
router.use('/category', categoryRouter)

module.exports = router 