'use strict'

const express = require('express')
const router = express.Router()
const PartController = require('../controllers/part-controller')
const auth = require('../middlewares/authentication')

// router.get('/', CarController.get)
// router.get('/:car', auth,CarController.getCars)
// router.post('/', auth,CarController.post)
router.get('/:owner/:car', auth,PartController.getParts)


module.exports = router
