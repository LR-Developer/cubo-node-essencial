import { validationResult } from 'express-validator'

function handlerValidator(req, res){
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json( { errors: errors.array() } )
        return true
    }
    return false
}

var funcoes = {
    handlerValidator: (req, res) => { return handlerValidator(req, res) }
}

export default funcoes
