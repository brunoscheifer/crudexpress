const { estudantes } = require('../data');

const removerEstudante = (req, res) => {
    const { id } = req.params;
    const index = estudantes.findIndex((e) => e.id == id);

    if(index === -1){
        return res.status(404).send('Estudante não encontrado!');
    }

    const estudanteDeletado = estudantes.splice(index, 1)[0];
    res.status(200).send({ message: 'Estudante removido com sucesso!', estudante: estudanteDeletado});
}

module.exports = removerEstudante;