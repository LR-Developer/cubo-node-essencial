import express from 'express'
import produtoService from '../service/produtoService'
import { check, validationResult } from 'express-validator'

const router = express.Router()

router.post('/', (req, res) => {
    produtoService.salvar(req, res)
})

router.get('/', (req, res) => {
    produtoService.buscarTodos(res)
})

router.get('/:id', (req, res) => {
    produtoService.buscarPorId(req.params.id, res)
})

router.put('/:id', (req, res) => {
    produtoService.atualizarProduto(req.params.id, req.body, res)
})

router.delete('/:id', (req, res) => {
    produtoService.deletarProduto(req.params.id, res)
})

export default router
