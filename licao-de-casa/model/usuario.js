import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default mongoose.model('usuario', new Schema({
    nome: {
        type: String,
        required: [function() {
            return this.nome.length > 50
        }, 'Nome não pode possuir mais do que 50 caracteres.']
    },
    login: {
        type: String,
        required: [function() {
            return this.login.length > 50
        }, 'Login não pode possuir mais do que 50 caracteres.']
    },
    senha: {
        type: String,
        required: [true, 'Senha é obrigatória.']
    },
    perfil: {
        type: String,
        enum: ['Admin', 'Regular'],
        required: [true, 'Perfil é obrigatório']
    }
}))
