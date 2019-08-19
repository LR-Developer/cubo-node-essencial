import express from 'express'
import produtoService from '../service/produtoService'
import { check, validationResult } from 'express-validator'
import helper from './controllerHelper'

const router = express.Router()

router.post('/', [
    check('nome').exists().withMessage('O campo nome é obrigatório.'),
    check('descricao').exists().withMessage('O campo descrição é obrigatório.'),
    check('valor').exists().withMessage('O campo nome é obrigatório.'),
    check('valor').isFloat( { max: 1000000 } ).withMessage('O valor máximo permitido é 1M.')
], (req, res, next) => {

    if(helper.handlerValidator(req, res)) {
        return
    }

    produtoService.salvar(req, res).catch(err => next(err))
})

router.get('/', (req, res, next) => {
    produtoService.buscarTodos(res).catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    produtoService.buscarPorId(req.params.id, res).catch(err => next(err))
})

router.put('/:id', (req, res, next) => {
    produtoService.atualizarProduto(req.params.id, req.body, res).catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
    produtoService.deletarProduto(req.params.id, res).catch(err => next(err))
})

export default router
