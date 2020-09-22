'use strict'

const express = require('express')
const router = express.Router()
const CarController = require('../controllers/car-controller')

router.get('/', CarController.get)

module.exports = router
