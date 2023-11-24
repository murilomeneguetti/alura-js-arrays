const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

//como o primeiro parametro não foi utilizado para nada, nesse caso se usa _
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);
let reprovadosforeach = [];

alunos.forEach(function(aluno, indice) {
    if (medias[indice] < 7) {
       reprovadosforeach.push(aluno); 
    }
})

console.log(reprovadosforeach)

let reprovadosarrow = [];

alunos.forEach((aluno, indice) => {
    if (medias[indice] < 7) {
        reprovadosarrow.push(aluno); 
    }
})

console.log(reprovadosarrow)

let reprovadosfor = [];

for (let i = 0; i < alunos.length; i++) {
    if (medias[i] < 7) {
        reprovadosfor.push(alunos[i]); 
    }
}

console.log(reprovadosfor)