let livros = [
    {id:1, titulo:'Dom Casmurro', autor:'Machado de Assis', ano:'1899', genero:'Romance'},
    {id:2, titulo:'Memórias Póstumas de Brás Cubas', autor:'Machado de Assis', ano:'1881', genero:'Romance'},
    {id:3, titulo:'Guarani', autor:'José de Alencar', ano:'1857', genero:'Romance'}
];

let estudantes = [
    {id:1, nome:'Ana Silva', matricula:'2024001', curso: 'Letras', ano:'2024'},
    {id:2, nome:'Pedro Santos', matricula:'2024002', curso:'Medicina' , ano:'2024'},
    {id:3, nome:'Laura Oliveira', matricula:'2024003', curso:'Engenharia de Software' , ano:'2024'}
];

let alugueis = [
    {id:1, idLivro:1, idEstudante:1, dataAluguel:'2024-09-02', dataDevolucao:'2024-09-10'},
    {id:2, idLivro:2, idEstudante:2, dataAluguel:'2024-09-03', dataDevolucao:'2024-09-12'},
    {id:3, idLivro:3, idEstudante:3, dataAluguel:'2024-09-02', dataDevolucao:'2020-09-10'}
];

module.exports = {livros, estudantes, alugueis};