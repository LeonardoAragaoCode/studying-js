//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' //Não é recomendado colocar um atributo no "Object.prototype" como no exemplo.
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'D'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //Primeiro irá procurar no filho, e se não achar, irá procurar no pai e depois no avo. 
//Importante! Por mais que o "attr3" também esteja na "const pai", ela não será considerada, pois já tem uma na "const filho".

