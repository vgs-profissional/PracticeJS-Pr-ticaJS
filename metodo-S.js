let frase = 'Eu vou largar minha casa e tráficar no jacaré!';
const icones = '☃★♲';
const aleatorio = '\ud83d\udc0e\ud83d\udc71\u2764';

/* String.at() ou String.charAt() (é basicamente a mesma coisa)
let index = 5;
console.log(`Usando o índice ${index}, será retornado o caracter no ${index + '°'} índice: ${frase.at(index)}.`);
console.log(`Se passar um indice negativo, será o ${index + '°'} da direita para a esquerda da string: ${frase.at(-5)}.`);*/
/*É usada em uma string recebendo um índice, é então retornado
o caracter deste índice, espaços vazios são ignorados.
Se não existir nada no indice indicado, retorna undefined.
Se passado um número negativo ele procura da direita para esquerda.
*/

// String.charCodeAt()
// console.log(`O código utf-16 do 5° caracter é: ${frase.charCodeAt(5)}${'(' + frase.charAt(5) + ')'}`);
/*Similar a .at() e .charAt(), é aplicada em uma string, recebe um índice e
retorna o um inteiro de 0 a 65535 representando o código utf-16 do caracter do índice.
Se passado um índice negativo ou o índice for maior que o
tamanho da string (espaços em branco são considerados),é retornado NaN.
Espaço em branco é pulado e o próximo caracter é retornado.
*/

// String.codePointAt()
// console.log(`${frase}`.codePointAt(0), `${icones}`.codePointAt(2))
/*codePointAt acessa uma string e retorna um número correspondente ao
valor UTF-16 do caractere passado na 'posição' (), se não houver nada
(espaço vazio tambem),retorna undefined.
*/

// String.concat()
/*console.log(`${frase}`.concat(icones));
let prova = `${[Object]}`.concat(false);
console.log(typeof(vasco));
console.log(frase += icones); Também funciona assim aparentemente*/
/*Basicamente esse método une dois valores passados, pode ser
absolutamente qualquer coisa que sai uma string
*/

/* String.endsWith()
function testaFrase(frase) {
    if (frase.endsWith('a')) { console.log('Verdade!') }
    else { console.log('Midira!'); }
}
testaFrase(frase);
*/
/*Usado para indicar se uma string termina com determinado caractere passado,
retorna true ou false dependendo da existência de tal caractere na string.
*/

// String.fromCharCode()
/*let olaMundo = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
olaMundo.forEach(numero => {
    console.log(String.fromCharCode(numero));
});
*/
/*Traduz números para seu correspondente em UTF-16. É um método estático, 
o que significaque ele trabalha com String.fromCharCode ao invez de usar 
uma string que você mesmo criou.
*/







