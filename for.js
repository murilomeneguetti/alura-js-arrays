const notas = [10, 6.5, 8, 7.5];

for (let indice = 0; indice < 4; indice++) {
    console.log(notas[indice]);
}

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);
