'use strict'

const repository = require('../repositories/part-repository')

const _repo = new repository()
function carController() {

}

carController.post = async (req, res) => {
    let result = await _repo.create(req.body)
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

carController.getParts = async (req, res) => {
    const parts = await _repo.getByCar(req.params.car)

    res.status(200).send({parts: parts})
}

carController.getCar = async (req, res) => {
    
    const car = await _repo.getById(req.params.car)
    res.status(200).send({car: car})
}
carController.getCarOverall = async (req, res) => {
    
    const car = await _repo.getById(req.params.car)
    res.status(200).send({car: car})
}

module.exports = carController



