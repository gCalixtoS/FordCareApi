'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

//procurar por dados das condições do veículo
const model = new schema({
    CAR : {trim: true, index: true, required:true, type:schema.ObjectId, ref:'owners'},
    TIME : {trim: true, required:true, type:Date},
    PREDICTED_ALERT: {required:true, type:Boolean},
    ALERT_CLASSIFIER: {required:true, type:String},
    'motor(%)': {required:true, type:Number},
    'transmissao(%)': {required:true, type:Number},
    'filtro-oleo(%)':{required:true,  type:Number},
    'filtro-combustivel(%)':{type:Number},
    'odometer':{type:Number},
    'tanque':{type:Number}
})



module.exports = mongoose.model('model_datas', model)