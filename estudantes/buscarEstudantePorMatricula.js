const { estudantes } = require('../data');

function buscarEstudantePorMatricula( req, res){
    const { matricula } = req.query;
    const resultados = estudantes.filter(estudante => 
    estudante.matricula.toLowerCase().includes(matricula.toLowerCase()));

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Nenhum estudante encontrado com essa matricula.' });
}

res.status(200).send(resultados);
};


module.exports = buscarEstudantePorMatricula;