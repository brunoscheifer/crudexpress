const { alugueis } = require('../data')

function delalugueis(req, res) {
    const { id } = req.params
    const index = alugueis.findIndex(alu => alu.id == id)

    if(index === -1) {
        return res.status(404).send('Aluguel não encontrado')
    }

    const alugueldel = alugueis.splice(index, 1)[0]

    res.status(200).send({mensagem: 'Aluguel deletado', alugue: alugueldel})
}

module.exports = delalugueis