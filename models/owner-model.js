'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

//procurar por dados do carro
const ownerModel = new schema({
    cpf : {trim: true, index: true, required:true, type:String},
    name : {trim: true, required:true, type:String},
    email: {required:true, type:String},
    picture: {type:String},
    phone: {type:String},
    password: {required:true, type:String}
})

module.exports = mongoose.model('owners', ownerModel)