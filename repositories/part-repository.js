'use strict'
require('../models/part-model')
const base = require('../bin/base/repository-base')

class CarRepository {
    constructor (){
        this._base = new base('model_datas')
    }

    async create(data){
        return await this._base.create(data)
    }

    async getCars(owner){
        const cars = await this._base._model.find({owner: owner})
        return cars === null ? [] : cars
    }
    async getById(id){
        const cars = await this._base.getById(id)
        return cars === null ? [] : cars
    }
    async getByCar(carId){
        const parts = await this._base._model.find({CAR: carId})
        return parts === null ? [] : parts
    }


}

module.exports = CarRepository