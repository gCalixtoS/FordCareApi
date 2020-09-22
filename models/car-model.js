'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

//procurar por dados do carro
const carModel = new schema({
    chassis : {trim: true, index: true, required:true, type:String},
    model : {trim: true, required:true, type:String},
    year: {required:true, type:Number},
    picture: {required:true, type:String},
    color: {required:true, type:String},
    carBody: {required:true, type:String},
    owner:{required:true, type:schema.ObjectId, ref:'owners'},
    acquisitionDate:{required:true, type:Date}
})

module.exports = mongoose.model('cars', carModel)