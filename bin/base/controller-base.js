exports.post = async (repository, validationContract, req, res) => {
    try {
        let data = req.body
        if (!validationContract.isValid()) {
            res.status(400).send({
                message: 'Invalid data in request',
                validation: validationContract.errors()
            }).end()
            return
        }

        let result = await repository.create(data)
        res.status(201).send(result)
    } catch (err) {
        res.status(500).send({message:'Internal Error', error:err})
    }
}

exports.customRequest = async (callback, req, res) => {
    try{
        callback(req,res)
    }catch (error){
        res.status(500).send({message:'Internal Error', error:err})
    }
}

exports.get = async (repository, req, res) => {
    try{
        let result = await repository.get()
        res.status(200).send(result)
    }catch(err){
        res.status(500).send({message:'Internal Error', error:err})
    }
}

exports.getById = async (repository, req, res) => {
    try{
        if(req.params.id){
            let result = await repository.getById(req.params.id)
            res.status(200).send(result)
        }else{
            res.status(400).send('Invalid request, missing id.')
        }
    }catch(err){
        res.status(500).send({message:'Internal Error', error:err})
    }
}

exports.put = async (repository, validationContract, req, res) => {

}

exports.delete = async (repository, req, res) => {

}