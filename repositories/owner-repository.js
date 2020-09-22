'use strict'
require('../models/owner-model')
const base = require('../bin/base/repository-base')

class OwnerRepository {
    constructor (){
        this._base = new base('owners')
    }

    async create(data){
        let createdOwner = await this._base.create(data)
        return await this._base._model.findById(createdOwner._id, 'name email _id')
    }

    async authenticate(email, pwd){
        let _hashPwd = md5(pwd)
        return await this._base._model.findOne({email:email, password: _hashPwd}, 'name email _id')
    }

    async emailExists (email){
        return await this._base._model.findOne({email:email}, 'name email _id')
    }

    async get(){
        console.log('teste')
        return await this._base._model.find({},'name email _id')
    }


}

module.exports = OwnerRepository