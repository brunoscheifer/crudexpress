const { alugueis } = require('../data')

function aluguelbyidlivro(req, res) {
    const idLivro = req.query.idLivro

    let alugue = alugueis.find(alu => alu.idLivro == idLivro)
    if(!alugue) {
        return res.status(404).send('Aluguel não encontrado')
    }
    
    res.status(200).send(alugue)
}

module.exports = aluguelbyidlivro