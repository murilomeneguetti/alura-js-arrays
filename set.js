const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//removendo os nomes repetidos
//Set é uma classe do js que não pode ter numeros repetidos
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

const nomesAtualizados2 = [...new Set(nomes)];

console.log(nomesAtualizados);
console.log(nomesAtualizados2);
