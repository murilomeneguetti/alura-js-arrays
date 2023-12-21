const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

//como o primeiro parametro não foi utilizado para nada, nesse caso se usa _
//a função callback do filter deve retornar um booleano, sempre true ou false
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//removendo os nomes repetidos
//Set é uma classe do js que não pode ter numeros repetidos
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];
console.log(nomesAtualizados);

const nomesUnicos = nomes.filter((nome, indice, array) => {
    return array.indexOf(nome) === indice;
})

console.log(nomesUnicos);
