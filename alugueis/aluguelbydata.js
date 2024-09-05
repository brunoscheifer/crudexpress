const { alugueis } = require('../data')

function aluguelbydata(req, res) {
    const dataAluguel = req.query.dataAluguel
    let alugue = alugueis.find(alu => alu.dataAluguel == dataAluguel)
    
    if(!alugue) {
        return res.status(404).send('Aluguel não encontrado')
    }
    
    res.status(200).send(alugue)
}

module.exports = aluguelbydata