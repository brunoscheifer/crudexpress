const { estudantes } = require('../data');

function buscarEstudantePorCurso(req, res) {
    const { curso } = req.query;
    const resultados = estudantes.filter(estudante => 
    estudante.curso.toLowerCase().includes(curso.toLowerCase()));

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Nenhum estudante encontrado com esse curso.' });
}

res.status(200).send(resultados);
};



module.exports = buscarEstudantePorCurso;