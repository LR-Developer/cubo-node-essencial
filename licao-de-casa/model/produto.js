import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default mongoose.model('produto', new Schema({
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
    }
}))
