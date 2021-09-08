const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) //Transforma em JSON. Observe que a função não é reconhecida.

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3 }')) //Os nomes dos atributos devem estar com aspas duplas(")
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) 
/* Quando for escrever um texto como value, deve também colocar entre aspas duplas. 
* Suporta normalmente os números flutuantes (1.7).
* Os booleanos não precisam das aspas duplas.
* Dá para inserir objeto e array. */
