function repetições(arr, numero, repetições) {
    while (arr.length < repetições) {
        arr.push(numero)
    }
}
const lista = [1,2,3,5]
repetições(lista, 0, 18);
console.log(lista);

