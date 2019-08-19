import express from 'express'

var router = express.Router()

router.get('/', (req, res) => {
    res.json( { resultado: 'hello world!' } )
})

router.post('/', (req,res) => {
    res.json( { resultado: req.body.teste } )
})

export default router
