import listaLivros from './listaParaTestes.js';

const arrayValor = process.argv;

function mergeSort(array) {
  /* dividir para conquistar / recursão */
  if (array.length > 1) {
    const meio = Math.floor(array.length / 2);
    const parte1 = mergeSort(array.slice(0, meio));
    const parte2 = mergeSort(array.slice(meio, array.length));
    array = ordena(parte1, parte2);
  }
  return array;
}

function ordena(parte1, parte2) {
  /* ordena e junta partes
  pap = posicaoAtualParte */
  let pap1 = 0;
  let pap2 = 0;
  const resultado = [];
  while (pap1 < parte1.length && pap2 < parte2.length) {
    let produtoAtual_1 = parte1[pap1];
    let produtoAtual_2 = parte2[pap2];

    if (produtoAtual_1.preco < produtoAtual_2.preco) {
      resultado.push(produtoAtual_1);
      pap1++
    } else {
      resultado.push(produtoAtual_2);
      pap2++;
    }
  }
  /* metodo retornando o retorno de uma função 
  return function () {
      if (pap1 < parte1.length) {
          return resultado.concat(part1.slice(pap1));
      } else {
          return resultado.concat(parte2.slice(pap2));
      }
  } */
  return resultado.concat(pap1 < parte1.length
    ? parte1.slice(pap1)
    : parte2.slice(pap2)
  )
}

console.log(mergeSort(arrayValor[2]));
/*Eu sei lá o que aconteceu aqui kkkkk */
// mergeSort(arrayValor);
