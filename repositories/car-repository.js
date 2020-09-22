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


}

module.exports = CarRepository