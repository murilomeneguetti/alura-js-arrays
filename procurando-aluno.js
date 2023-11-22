// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        // const listaAlunos = listaDeAlunosEMedias[0];
        // const listaMedias = listaDeAlunosEMedias[1];
        const [listaAlunos, listaMedias] = listaDeAlunosEMedias

        const indice = listaAlunos.indexOf(aluno);

        const mediaDoAluno = listaMedias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    } else {
        console.log('Aluno não encontrado!');
    }
}

exibeNomeENota('Ana');
