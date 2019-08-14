import express from 'express'
import bodyParser from 'body-parser'
import rotas from './rotas'
import config from './config'
import mongoose from 'mongoose'

var app = express()

mongoose.connect(config.database)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

rotas(app)

app.listen(8080)
console.log('Server rodando na porta 8080')
