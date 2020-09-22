const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const variables = require('./configuration/variables')

mongoose.connect(variables.Database.connection, {useNewUrlParser: true})

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

const carRouter = require('../routes/car-route')
const ownerRouter = require('../routes/owner-route')

app.use('/api/car', carRouter)
app.use('/api/owner', ownerRouter)

module.exports = app