'use strict'

const express = require('express')
const router = express.Router()
const CarController = require('../controllers/car-controller')
const auth = require('../middlewares/authentication')

// router.get('/', CarController.get)
router.get('/:owner', auth,CarController.getCars)
router.post('/', auth,CarController.post)
router.get('/:owner/:car', auth,CarController.getCar)


module.exports = router
