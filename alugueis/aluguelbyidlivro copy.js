const { alugueis } = require('../data')

function aluguelbyidlivro(req, res) {
    const idEstudante = req.query.idEstudante

    let alugue = alugueis.find(alu => alu.idEstudante == idEstudante)
    if(!alugue) {
        return res.status(404).send('Aluguel não encontrado')
    }
    
    res.status(200).send(alugue)
}

module.exports = aluguelbyidlivro