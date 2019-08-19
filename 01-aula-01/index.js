import express from 'express'
import bodyParser from 'body-parser'
import rotas from './rotas'

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

rotas(app)

app.listen(8080)
console.log('Server rodando na porta 8080')
