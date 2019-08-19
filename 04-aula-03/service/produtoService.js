import Produto from '../model/produto'
import error from './errorService'

async function salvar(req, res) {
    const produto = new Produto(req.body)
    await produto.save().catch(error)
    return res.status(201).json( { id: produto._id } )
}

async function buscarTodos(res) {
    res.status(200).json( { result: await Produto.find().populate('createdBy').exec().catch(error) })
}

async function buscarPorId(id, res) {
    res.status(200).json( { result: await Produto.findOne( { _id: id }).populate('createdBy').exec().catch(error) })
}

async function buscarPorUsuario(id, res) {
    return res.json( { result: await Produto.buscarPorUsuario(id).catch(error) } )
}

async function atualizarProduto(id, body, res) {
    await Produto.updateOne( { _id: id }, body ).exec().catch(error)
    res.status(200).json( { result: 'Produto atualizado com sucesso!'} )
}

async function deletarProduto(id, res) {
    await Produto.deleteOne( { _id: id }).exec().catch(error)
    res.status(200).json( { result: 'Produto removido com sucesso!' } )
}


const functions = {
    salvar: (req, res) => { return salvar(req, res) },
    buscarTodos: (res) => { return buscarTodos(res) },
    buscarPorId: (id, res) => { return buscarPorId(id, res) },
    buscarPorUsuario: (id, res) => { return buscarPorUsuario(id, res) },
    atualizarProduto: (id, body, res) => { return atualizarProduto(id, body, res) },
    deletarProduto: (id, res) => { return deletarProduto(id, res) }
}

export default functions
