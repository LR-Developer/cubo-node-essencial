import Usuario from '../model/usuario'
import error from './errorService'

async function salvar(body, res) {
    const usuario = new Usuario(body)
    await usuario.save().catch(error)
    res.status(201).json( { id: usuario._id } )
}

async function buscarTodos(res) {
    return res.json( { result: await Usuario.find().exec().catch(error) } )
}

async function buscarPorId(id, res) {
    return res.json( { result: await Usuario.findOne( { _id: id } ).exec().catch(error) } )
}

async function atualizar(body, id, res) {
    await Usuario.updateOne( { _id: id }, body ).exec().catch(error)
    res.status(201).json( { result: 'Usuário atualizado com sucesso!' } )
}

async function deletar(id, res) {
    await Usuario.deleteOne( { _id: id } ).exec().catch(error)
    return res.status(200).json( { result: 'Usuário removido com sucesso!' } )
}

const functions = {
    salvar: (body, res) => { return salvar(body, res) },
    buscarTodos: (res) => { return buscarTodos(res) },
    buscarPorId: (id, res) => { return buscarPorId(id, res) },
    atualizar: (body, id, res) => { return atualizar(body, id, res) },
    deletar: (id, res) => { return deletar(id, res) }
}

export default functions
