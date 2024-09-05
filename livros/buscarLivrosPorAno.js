const {livros} = require('../data')

const buscarLivrosPorAno = (req, res) => {
    const {termo} = req.query;

    const resultados = livros.filter(livro =>
        livro.ano === ano
    );
    if (resultados.length === 0){
        return res.status(404).send({
            message: 'Nenhum livro encontrado para o ano especificado'
        });
    }
    res.status(200).send(resultados);
};
module.exports = buscarLivrosPorAno