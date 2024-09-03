const { alugueis } = require('../data')

function attalugueis(req, res) {
    const { id } = req.params
    const novaDataAluguel = req.body.dataAluguel
    const novaDataDevolucao = req.body.dataDevolucao

    const alugue = alugueis.find(alu => alu.id == id)

    alugue.dataAluguel = novaDataAluguel
    alugue.dataDevolucao = novaDataDevolucao

    res.status(201).send({mensagem: 'Aluguel atualizado', alugue: alugue})    

}

module.exports = attalugueis