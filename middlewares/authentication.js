const jwt = require('jsonwebtoken')
const variables = require('../bin/configuration/variables')

module.exports = async (req, res, next) => {
    let token = req.body.token || req.headers['x-access-token'] || req.query.token

    if (token) {
        try{
            let decoded = await jwt.verify(token, variables.Security.secret)
            req.usuarioLogado = decoded
            next()
        }catch(err){
            req.status(401);send({message:'Token format is incorrect.'})
        }
    }else{
        res.status(401).send({message:'Access token is required.'})
        return
    }
}