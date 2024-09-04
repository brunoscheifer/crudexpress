const { estudantes } = require('../data');

const buscarEstudantePorNome = (req, res) => {
    const { nomeBuscado } = req.query;
    const resultados = estudantes.filter(estudante => 
    estudante.nome.toLowerCase().includes(nomeBuscado.toLowerCase()));

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Nenhum estudante encontrado com esse nome.' });
}

res.status(200).send(resultados);
};

module.exports = buscarEstudantePorNome;