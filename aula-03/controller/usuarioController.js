import express from 'express'
import usuarioService from '../service/usuarioService'
import { check, validationResult } from 'express-validator/check'
import helper from './controllerHelper'

const router = express.Router()

router.post('/', [
    check('nome').exists().withMessage('O campo nome é obrigatório.'),
    check('nome').isLength( { min: 5 } ).withMessage('O campo nome deve possuir, no mínimo, 5 caracteres.'),
    check('nome').isLength( { max: 50 } ).withMessage('O campo nome deve possuir, no máximo, 50 caracteres.'),
    check('login').exists().withMessage('O campo login é obrigatório.'),
    check('senha').exists().withMessage('O campo senha é obrigatório.'),
    check('perfil').exists().withMessage('Perfil é obrigatório.')
], (req, res, next) => {
    
    if(helper.handlerValidator(req, res)) {
        return
    }

    usuarioService.salvar(req.body, res).catch(err => next(err))
})

router.get('/', (req, res, next) => {
    usuarioService.buscarTodos(res).catch(err => next(err))
})

router.get('/:id', (req, res) => {
    usuarioService.buscarPorId(req.params.id, res).catch(err => next(err))
})

router.put('/:id', (req, res) => {
    usuarioService.atualizar(req.body, req.params.id, res).catch(err => next(err))
})

router.delete('/:id', (req, res) => {
    usuarioService.deletar(req.params.id, res).catch(err => next(err))
})

export default router
