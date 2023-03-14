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

// String.fromCodePoint()
// console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307))
/*Sinceramente não entendi, acho que não é importante */

// String.includes(searchString, position)
// console.log(frase.includes('largar', 6))
/*Includes verifica se uma string(passada antes do ponto) contém outra string
(passada pelo parêntese), o retorno é true ou false.
É obvio que tem que passar a string exatamente igual ao que ta no texto, se não
retorna false.
Também pode passar o indice que deve começar a procurar(espaço também conta) */

// String.indexOf(searchValue, fromIndex)
// console.log(frase.indexOf('minha'));
/*Nos diz o indice do inicio do texto/número/simbolo passado. Se o valor
buscado não for encontrado, retorna -1, se nenhuma string for fornecida
undefined é usado como padrão (searchValue = undefined / undefined.indexOf() retorna 0).
É possível passar um indice o qual o metódo deve começar a buscar o valor passado
(Se o indice for maior que o tamanho da string retorna -1),com qualquer fromIndex
igual ou maior que o comprimento da string, o valor retornado é o comprimento da string.
*/

// String.lastIndexOf(searchValue, fromIndex)
// console.log(frase.lastIndexOf('m')); //retorna 14 que é o indíce da última aparição de 'm'
/*SearchValue: Uma string representando o valor a ser procurado. Se searchValue for uma
string vazia, str.length é retornado.
fromIndex: Opcional. O índice no qual a pesquisa será iniciada de trás para frente. O valor padrão
é +Infinity. Se fromIndex >= str.length, toda string é pesquisada. Se fromIndex < 0,
o comportamento será o mesmo que seria com o índice 0.
 */

// String.localeCompare(compareString, locales, options);
// console.log('aaa'.localeCompare('aab', 'pt')); //'aaa' ocorre antes de 'aab' logo -1
/*O método localeCompare() retorna um número que indica se uma string de referência 
vem antes ou depois, ou é a mesma que a string fornecida na ordem de classificação. 

compareString: A string com a qual a string passada é comparada.

locales _e _options: Esses argumentos personalizam o comportamento da função e 
permitem que os aplicativos especifiquem o idioma cujas convenções de formatação 
devem ser usadas. Em implementações que ignoram os argumentos locales e options, 
a localidade usada e a forma da string retornada são inteiramente dependentes da implementação.

valor retornado: Um número negativo se referenceStr ocorrer antes de compareString. Um número 
positivo se o referenceStr ocorrer após compareString. 0 se eles forem equivalentes.
*/

