import express from 'express'

var router = express.Router()

router.get('/:numero', (req, res) => {

    if(isNaN(req.params.numero)) return res.status(400).json( { erro: 'Deu merda' } )

    //10
    //1 1 2 3 5 8 13 21 34 55
    let sequencia = [1, 1]
    let valorInicial = req.params.numero

	for (let i = 2; i < valorInicial; i++) {
		sequencia[i] = sequencia[i - 1]+ sequencia[i - 2]
	}

    res.status(200).json( { fibonacci: sequencia[valorInicial - 1] } )

})

export default router
