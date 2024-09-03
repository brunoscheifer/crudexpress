const { alugueis } = require('../data')

function addalugueis(req, res) {
    const novoAluguel = {
        id: alugueis.length + 1,
        idLivro: req.body.idLivro,
        idEstudante: req.body.idEstudante,
        dataAluguel: req.body.dataAluguel,
        dataDevolucao: req.body.dataDevolucao
    }

    alugueis.push(novoAluguel)

    res.status(201).send({mensagem: 'Aluguel adicionado', alugueis: novoAluguel})
}

module.exports = addalugueis