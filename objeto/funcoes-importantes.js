
const pessoa = {
    nome: 'Rebeca',
    idade: 18,
    peso: 65
}

const arrayTeste = [['a', 1], ['b', 2]]

console.log(Object.keys(pessoa)) //Mostra somente as chaves 
console.log(Object.values(pessoa)) //Mostra somente os valores
console.log(Object.entries(pessoa)) //Transforma as chaves e valores em array.
console.log(Object.fromEntries(arrayTeste)) //Transforma um par de chave e valor em objeto.

// Um exemplo utilizando o método ".entries" e o ".forEach":
Object.entries(pessoa).forEach(([chave, valor]) => {
console.log(`${chave}: ${valor}`)
})

//Define algumas "propriedades" específicas: 
Object.defineProperty(pessoa, 'dataNascimento', { //Observar que há uma ordem a ser seguida.
enumerable: true, //Se vai aparecer ou não
writable: false, //Se pode ser reescrita ou alterada
value: '17/08/1995' 
})

pessoa.dataNascimento = '01/05/1997' //Não alterou, pois o writable acima está com o valor "false".
console.log(pessoa)

//Object.assign(ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
Object.assign(dest, o1, o2) // Ele junta tudo em um lugar só, porém a ordem importa. Primeiro o destino, e depois todos os outros são os que vão se deslocar para o destino.
console.log(dest) //Importante! Os valores com a mesma chave serão reescritos.