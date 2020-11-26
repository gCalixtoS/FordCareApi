'use strict'

const express = require('express')
const router = express.Router()
const OwnerController = require('../controllers/owner-controller')
const auth = require('../middlewares/authentication')

router.get('/', auth,OwnerController.get)
router.post('/', OwnerController.post)
router.get('/amqp', OwnerController.amqp)
router.post('/login',OwnerController.authenticate)

module.exports = router
