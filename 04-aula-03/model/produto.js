import mongoose from 'mongoose'
import Usuario from '../model/usuario'

const Schema = mongoose.Schema

const modelo = new Schema({
    nome: {
        type: String,
        required: [true, 'O nome do produto é obrigatório.'],
        maxlength: [50, 'O nome deve possuir, no máximo, 50 caracteres']
    },
    descricao: {
        type: String,
        required: [true, 'A descrição do produto é obrigatória.'],
        maxlength: [500, 'A descrição deve possuir, no máximo, 500 caracteres']
    },
    valor: {
        type: Number,
        required: [true, 'O valor é obrigatório.'],
        max: [1000000, 'O valor máximo permitido é 1M.']
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario' }
})

modelo.statics.buscarPorUsuario = async function(id){
    const user = await Usuario.findOne( { _id: id } ).exec()
    return await this.find().where( { createdBy: user._id }).populate('createdBy').exec()
}

export default mongoose.model('produto', modelo)
