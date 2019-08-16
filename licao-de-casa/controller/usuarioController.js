import express from 'express'
import usuarioService from '../service/usuarioService'
import { check, validationResult } from 'express-validator/check'

const router = express.Router()

router.post('/', [
    check('nome').exists().isLength( { min: 5, max: 50 } ),
    check('login').exists(),
    check('senha').exists(),
    check('perfil').exists().withMessage('Perfil é obrigatório.')
], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json( { errors: errors.array() } )
    }

    usuarioService.salvar(req.body, res)
})

router.get('/', (req, res) => {
    usuarioService.buscarTodos(res)
})

router.get('/:id', (req, res) => {
    usuarioService.buscarPorId(req.params.id, res)
})

router.put('/:id', (req, res) => {
    usuarioService.atualizar(req.body, req.params.id, res)
})

router.delete('/:id', (req, res) => {
    usuarioService.deletar(req.params.id, res)
})

export default router
