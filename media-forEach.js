const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//função callback: quando passamos uma função como parametro de outra função
notas.forEach(function (nota, indice) {
    console.log(indice);
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);
