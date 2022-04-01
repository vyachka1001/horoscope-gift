const Router = require('express')
const router = new Router()
const certificateController = require('../controllers/controller-certificate')
router.post('/')
router.get('/')
router.get('/:id')

module.exports = router

