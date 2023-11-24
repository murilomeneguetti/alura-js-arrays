const notas = [7, 7, 8, 9];

//não se deve usar = dessa forma, porque se fizer alguma alteração no verto novasNotas, vai alterar o vetor original notas
//para o javascript, novasNotas e notas são o mesmo array
const novasNotas = notas;

novasNotas.push(10);
notas.push(5);

console.log(novasNotas);
console.log(notas);

//para somente copiar, deve-se usar o ... (spread operator - operador de espalhamento)
//esse operador faz um copia e cola dos valores do vetor
const copiaNotas = [...notas, 10];

copiaNotas.push(15);

console.log(`As novas notas são: ${copiaNotas}`);
console.log(`As notas originais são: ${notas}`);
