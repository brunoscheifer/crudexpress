const { alugueis } = require('../data')

const listarlugueis = (req, res) => {
    res.status(200).send(alugueis)
}

module.exports = listarlugueis