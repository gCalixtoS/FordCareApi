const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const variables = require('./configuration/variables')

var cors = require('cors')
	app.use(cors())
	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	});

mongoose.connect(variables.Database.connection, {useNewUrlParser: true})

app.use(bodyParser.urlencoded({extended: true, parameterLimit: 50000, limit: '50mb'}))
app.use(bodyParser.json({ limit: '50mb' }))

const partRouter = require('../routes/part-route')
const carRouter = require('../routes/car-route')
const ownerRouter = require('../routes/owner-route')

app.use('/api/car', carRouter)
app.use('/api/part', partRouter)
app.use('/api/owner', ownerRouter)

module.exports = app