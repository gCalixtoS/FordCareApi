'use strict'
require('../models/car-model')
const base = require('../bin/base/repository-base')

class CarRepository {
    constructor (){
        this._base = new base('cars')
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


}

module.exports = CarRepository