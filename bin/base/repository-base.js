'use strict'

const mongoose = require('mongoose')


class RepositoryBase {
    constructor (model){
        this._model = mongoose.model(model)
    }

    async create(data){
        return await new this._model(data).save()
    }

    async get(){
        return await this._model.find()
    }


}

module.exports = RepositoryBase