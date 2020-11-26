'use strict'

const repository = require('../repositories/owner-repository')
const _repo = new repository()
const validation = require('../bin/helpers/validation')
const md5 =require('md5')
const controllerBase = require('../bin/base/controller-base')
const jwt = require('jsonwebtoken')
const variables = require('../bin/configuration/variables')

function ownerController() {

}

ownerController.post = async (req, res) => {
    let _validationContract = new validation()

    _validationContract.isRequired(req.body.email, 'E-mail must be informed.')
    _validationContract.isEmail(req.body.email, 'Invalid e-mail.')
    _validationContract.isRequired(req.body.password, 'Password must be informed.')
    _validationContract.isRequired(req.body.pwdConfirmation, 'Confirmation password must be informed.')
    _validationContract.isTrue(req.body.password != req.body.pwdConfirmation, 'Passwords does not match.')

    let ownerExists = await _repo.emailExists(req.body.email)
    if (ownerExists){
        _validationContract.isTrue(ownerExists.name != undefined, `E-mail already registered.`)
    }

    req.body.password = md5(req.body.password)
    controllerBase.post(_repo, _validationContract, req, res)
}

ownerController.put = async (req, res) => {

}

ownerController.delete = async (req, res) => {

}

ownerController.get = async (req, res) => {
    controllerBase.get(_repo,req,res)
}

ownerController.getById = async (req, res) => {

}

ownerController.authenticate = async (req, res) => {
    try {
        let _validationContract = new validation()

        _validationContract.isRequired(req.body.email, 'E-mail must be informed.')
        _validationContract.isRequired(req.body.password, 'Password must be informed.')
    
        if(!_validationContract.isValid()){
            res.status(400).send({message:'Login failed', validation:_validationContract.errors()})
            return
        }
        
        let owner = await _repo.authenticate(req.body.email, req.body.password)
        
        if(owner){
            res.status(200).send({
                owner: owner,
                token: jwt.sign({owner:owner}, variables.Security.secret)
            })
        }
    } catch (error) {
        res.status(500).send('error')
    }
}

ownerController.amqp = async(req, res) => {
    var q = 'hello';

    var open = require('amqplib').connect('amqps://rabbitmq:passwordAwsRabbitMQ@b-8e07b895-7a7f-4084-b101-85f38130ee80.mq.sa-east-1.amazonaws.com:5671');

    // Publisher
    open.then(function(conn) {
        
        return conn.createChannel();
    }).then(function(ch) {
        return ch.assertQueue(q).then(function(ok) {
            return ch.sendToQueue(q, Buffer.from('something to do'))            
        });
    }).then(() => {
        res.status(200).send({"message":"success"})
    }).catch(console.warn);
}

module.exports = ownerController



