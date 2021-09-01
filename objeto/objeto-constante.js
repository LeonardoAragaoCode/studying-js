// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' //Alterou o atributo nome
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} //Quando tenta atribuir um novo objeto não é permitido, pois é uma constante.

Object.freeze(pessoa) //Não deixa nada ser alterado no objeto "pessoa".

pessoa.nome = 'Maria' //Nenhuma dessas linhas abaixa irá funcionar por causa do delete
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa) 

const pessoaConstante = Object.freeze({ nome: 'João'}) // Fica inalterável devido a constante "pessoaConstante" e o método "Object.freeze".
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)