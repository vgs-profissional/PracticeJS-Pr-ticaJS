const listaLivros = require('./ListaParaTestes');
const mergeSort = require('./Merge');

const listaOrdenada = mergeSort(listaLivros);
let inicio = 0;
let fim = listaOrdenada.length + 1;

function buscaBi(array, de, ate, buscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];
    if (de > ate) {
        return -1
    }
    if (buscado === atual.preco) {
        return array[meio];
    }
    if (buscado < atual.preco) {
        return buscaBi(array, de, meio -1, buscado);
    }
    if (buscado > atual.preco) {
        return buscaBi(array, meio +1, ate, buscado);
    }
}

console.log(buscaBi(listaOrdenada, inicio, fim, 25));