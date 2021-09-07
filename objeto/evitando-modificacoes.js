//Object.preventExtensions
const produto = Object.preventExtensions({ //Não permite adicionar novos atributos
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)) //"Object.isExtensible" serve para testar se é extensível.

produto.nome = 'Borracha' 
produto.descricao = 'Capaz de apagar caneta' //Observe que o ".descrição" não foi adicionado
delete produto.tag 
console.log(produto) //Alterações e exclusões são permitidos.

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa) //Somente deixa ocorrer alterações

console.log('Selado:', Object.isSealed(pessoa)) //Verificação 

pessoa.nome = 'Maria'
delete pessoa.nome //Não é permitido deletar ou adicionar um novo atributo
pessoa.idade = 29
console.log(pessoa)

//Objeto freeze
const endereco = {rua: 'Rua do programador', numero: 65, bairro: 'Pedro bueno'}

Object.freeze(endereco) //Não deixa nada ser alterado no objeto "endereco".

endereco.rua = 'Rua do trabalhador'
endereco.numero = 356
delete endereco.bairro
console.log(endereco) 