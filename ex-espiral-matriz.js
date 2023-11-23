// let a = [1, 2, 3, 4];
// let b = [5, 6, 7, 8];
// let c = [9, 10, 11, 12];
// let d = [13, 14, 15, 16];

// let matriz = [a, b, c, d];

// console.log(matriz);
// console.log(matriz[1][1]);

// let vetor = [[],[],[],[]];

// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= 4; j++) {
//         vetor[i][j] = 1;
//     }
// }

// console.log(vetor);

function preencherMatrizEspiral(rows, cols) {
    // Inicializar matriz com zeros
    const matriz = new Array(rows);
    for (let i = 0; i < rows; i++) {
      matriz[i] = new Array(cols).fill(0);
    }
  
    let valor = 1;
    let inicioLinha = 0;
    let fimLinha = rows - 1;
    let inicioColuna = 0;
    let fimColuna = cols - 1;
  
    while (inicioLinha <= fimLinha && inicioColuna <= fimColuna) {
      // Preencher da esquerda para a direita
      for (let i = inicioColuna; i <= fimColuna; i++) {
        matriz[inicioLinha][i] = valor++;
      }
      inicioLinha++;
  
      // Preencher de cima para baixo
      for (let i = inicioLinha; i <= fimLinha; i++) {
        matriz[i][fimColuna] = valor++;
      }
      fimColuna--;
  
      // Preencher da direita para a esquerda
      if (inicioLinha <= fimLinha) {
        for (let i = fimColuna; i >= inicioColuna; i--) {
          matriz[fimLinha][i] = valor++;
        }
        fimLinha--;
      }
  
      // Preencher de baixo para cima
      if (inicioColuna <= fimColuna) {
        for (let i = fimLinha; i >= inicioLinha; i--) {
          matriz[i][inicioColuna] = valor++;
        }
        inicioColuna++;
      }
    }
  
    return matriz;
  }
  
  // Exemplo: criar uma matriz 3x3 e preenchê-la na ordem espiral
  const matrizEspiral = preencherMatrizEspiral(4, 4);
  console.log(matrizEspiral);

