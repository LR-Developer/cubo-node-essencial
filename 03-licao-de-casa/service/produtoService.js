import Produto from '../model/produto'

async function salvar(req, res) {
    const produto = new Produto(req.body)
    await produto.save()
    return res.status(201).json( { id: produto._id } )
}

async function buscarTodos(res) {
    res.status(200).json( { result: await Produto.find().exec() })
}

async function buscarPorId(id, res) {
    res.status(200).json( { result: await Produto.findOne( { _id: id }).exec() })
}

async function atualizarProduto(id, body, res) {
    await Produto.updateOne( { _id: id }, body ).exec()
    res.status(200).json( { result: 'Produto atualizado com sucesso!'} )
}

async function deletarProduto(id, res) {
    await Produto.deleteOne( { _id: id }).exec()
    res.status(200).json( { result: 'Produto removido com sucesso!' } )
}

const functions = {
    salvar: (req, res) => { return salvar(req, res) },
    buscarTodos: (res) => { return buscarTodos(res) },
    buscarPorId: (id, res) => { return buscarPorId(id, res) },
    atualizarProduto: (id, body, res) => { return atualizarProduto(id, body, res) },
    deletarProduto: (id, res) => { return deletarProduto(id, res) }
}

export default functions
