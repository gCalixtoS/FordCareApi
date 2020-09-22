'use strict'

const repository = require('../repositories/car-repository')
const _repo = new repository()
function carController() {

}

carController.post = async (req, res) => {
    let result = await _repo.create(req.data)
    res.status(201).send(result)
}

carController.put = async (req, res) => {

}

carController.delete = async (req, res) => {

}

carController.get = async (req, res) => {
    res.send('Olas')
}

carController.getById = async (req, res) => {

}

module.exports = carController



