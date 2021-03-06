'use strict'

const repository = require('../repositories/car-repository')
// const partsRepo = require('../repositories/part-repository')

const _repo = new repository()
// const _partsRepo = new partsRepo()
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

carController.getCars = async (req, res) => {
    const cars = await _repo.getCars(req.params.owner)
    res.status(200).send({cars: cars})
}

carController.getCar = async (req, res) => {
    
    const car = await _repo.getById(req.params.car)
    // const parts = await _partsRepo.getByCar(req.params.car)
    // car.parts = parts
    res.status(200).send({car: car})
}
carController.getCarOverall = async (req, res) => {
    
    const car = await _repo.getById(req.params.car)
    res.status(200).send({car: car})
}

module.exports = carController



