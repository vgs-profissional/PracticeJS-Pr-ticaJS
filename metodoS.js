let frase = 'Eu vou largar minha casa e tráficar no jacaré!';
const icones = '☃★♲';
const aleatorio = '\ud83d\udc0e\ud83d\udc71\u2764';
const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s#?.].[^\s]*)\)/gm;
const link = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'
/* String.at() ou String.charAt() (é basicamente a mesma coisa)
let index = 5;
console.log(`Usando o índice ${index}, será retornado o caracter no ${index + '°'} índice: ${frase.at(index)}.`);
console.log(`Se passar um indice negativo, será o ${index + '°'} da direita para a esquerda da string: ${frase.at(-5)}.`);
É usada em uma string recebendo um índice, é então retornado
o caracter deste índice, espaços vazios são ignorados.
Se não existir nada no indice indicado, retorna undefined.
Se passado um número negativo ele procura da direita para esquerda.
*/

/* String.charCodeAt()
// console.log(`O código utf-16 do 5° caracter é: ${frase.charCodeAt(5)}${'(' + frase.charAt(5) + ')'}`);
/*Similar a .at() e .charAt(), é aplicada em uma string, recebe um índice e
retorna o um inteiro de 0 a 65535 representando o código utf-16 do caracter do índice.
Se passado um índice negativo ou o índice for maior que o
tamanho da string (espaços em branco são considerados),é retornado NaN.
Espaço em branco é pulado e o próximo caracter é retornado.
*/

/* String.codePointAt()
// console.log(`${frase}`.codePointAt(0), `${icones}`.codePointAt(2))
/*codePointAt acessa uma string e retorna um número correspondente ao
valor UTF-16 do caractere passado na 'posição' (), se não houver nada
(espaço vazio tambem),retorna undefined.
*/

/* String.concat()
/*console.log(`${frase}`.concat(icones));
let prova = `${[Object]}`.concat(false);
console.log(typeof(vasco));
console.log(frase += icones); Também funciona assim aparentemente.
Basicamente esse método une dois valores passados, pode ser
absolutamente qualquer coisa que sai uma string
*/

/* String.endsWith()
function testaFrase(frase) {
    if (frase.endsWith('a')) { console.log('Verdade!') }
    else { console.log('Midira!'); }
}
testaFrase(frase);

Usado para indicar se uma string termina com determinado caractere passado,
retorna true ou false dependendo da existência de tal caractere na string.
*/

/* String.fromCharCode()
/*let olaMundo = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
olaMundo.forEach(numero => {
    console.log(String.fromCharCode(numero));
});

Traduz números para seu correspondente em UTF-16. É um método estático,
o que significaque ele trabalha com String.fromCharCode ao invez de usar
uma string que você mesmo criou.
*/

/* String.fromCodePoint()
// console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307))
/*Sinceramente não entendi, acho que não é importante */

/*String.includes(searchString, position)
// console.log(frase.includes('largar', 6))
/*Includes verifica se uma string(passada antes do ponto) contém outra string
(passada pelo parêntese), o retorno é true ou false.
É obvio que tem que passar a string exatamente igual ao que ta no texto, se não
retorna false.
Também pode passar o indice que deve começar a procurar(espaço também conta) */

/* String.indexOf(searchValue, fromIndex)
// console.log(frase.indexOf('minha'));
/*Nos diz o indice do inicio do texto/número/simbolo passado. Se o valor
buscado não for encontrado, retorna -1, se nenhuma string for fornecida
undefined é usado como padrão (searchValue = undefined / undefined.indexOf() retorna 0).
É possível passar um indice o qual o metódo deve começar a buscar o valor passado
(Se o indice for maior que o tamanho da string retorna -1),com qualquer fromIndex
igual ou maior que o comprimento da string, o valor retornado é o comprimento da string.
*/

/* String.lastIndexOf(searchValue, fromIndex)
// console.log(frase.lastIndexOf('m')); //retorna 14 que é o indíce da última aparição de 'm'
/*SearchValue: Uma string representando o valor a ser procurado. Se searchValue for uma
string vazia, str.length é retornado.
fromIndex: Opcional. O índice no qual a pesquisa será iniciada de trás para frente. O valor padrão
é +Infinity. Se fromIndex >= str.length, toda string é pesquisada. Se fromIndex < 0,
o comportamento será o mesmo que seria com o índice 0.
 */

/* String.localeCompare(compareString, locales, options);
// console.log('aaa'.localeCompare('aab', 'pt')); //'aaa' ocorre antes de 'aab' logo -1
/*O método localeCompare() retorna um número que indica se uma string de referência
vem antes ou depois, ou é a mesma que a string fornecida na ordem de classificação.

compareString: A string com a qual a string passada é comparada.

locales e options: Esses argumentos personalizam o comportamento da função e
permitem que os aplicativos especifiquem o idioma cujas convenções de formatação
devem ser usadas. Em implementações que ignoram os argumentos locales e options,
a localidade usada e a forma da string retornada são inteiramente dependentes da implementação.

valor retornado: Um número negativo se referenceStr ocorrer antes de compareString. Um número
positivo se o referenceStr ocorrer após compareString. 0 se eles forem equivalentes.
*/

/*String.match(regexp)
console.log(link.match(regex)); //adicionei uma palavra ao link, e foi capturado, apenas o que entra no regex
/*O metódo match() recebe uma expressão regular e retorna uma correspondência
entre uma string com uma expressão.

regexp: passa-se um objeto regexp, se esse não for o caso, o mesmo será convertido
para um usando new Regexp(regexp).
Se você não fornecer nenhum parâmetro ao usar o método match(),
você obterá um Array com uma string vazia: [""].

Valor retornado: Se o sinalizador g for usado, todos os resultados correspondentes
à expressão regular serão retornados, mas a captura de grupos não.

se o sinalizador g não for usado, apenas a primeira correspondência
completa e seus grupos de captura relacionados serão retornados. Nesse caso,
o item devolvido terá propriedades adicionais conforme descrito a seguir.

array: Um Array cujo conteúdo depende da presença ou ausência do sinalizador
global (g), ou null se nenhuma correspondência for encontrada.
*/

/* String.matchAll(regexp)
const regexp = RegExp('foo[a-z]*', 'g');
const str = 'table football, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
    console.log(`Encontrou ${match[0]} início=${match.index} fim=${regexp.lastIndex}.`);
}
/*O método matchAll() retorna um iterador de todos os resultados correspondentes 
a uma string em relação a uma expressão regular, incluindo grupos de captura

regexp:Um objeto de expressão regular.Se um objeto obj não-RegExp for passado, 
ele será convertido implicitamente em um RegExp usando new RegExp(obj).
O objeto RegExp deve ter o sinalizador (flag) /g, caso contrário, um TypeError será retornado.*/

/*String.normalize(form) não entendi*/

/* String.padEnd(targetLength, padString)

const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.'));

adiciona texto ao fim da string passada quantas vezes você 
específicar */

/*String.padStart(targetLength, padString)
const cpfCompleto = '2034399002125581';
const last4Digits = cpfCompleto.slice(-4);
const cpfMascarado = last4Digits.padStart(cpfCompleto.length, '*');
console.log(cpfMascarado);*/








