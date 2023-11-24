const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    //reduce vai iterar sobre o array e vamos passar uma função callback como primeiro parametro
    //como segundo parametro da função, vamos passar o valor 0 como valor inicial do acumulador
    //a cada iteração, vamos atualizando o valor do acumulador para calcular a soma de todas as notas
    // const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
    //     return acumulador + nota;
    // }, 0)
    //forma mais curta da arrow function
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = somaDasNotas / notasDaSala.length;
    return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);
