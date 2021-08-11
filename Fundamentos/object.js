//Um objeto é caracterizado com o uso das chaves "{}"
const prod1 = {} //objeto vazio
prod1.nome = 'Celular Ultra Mega' //Um jeito de definir as características do objeto dinamicamente
prod1.preco = 4998.90
prod1['DescontoLegal'] = 0.40 //Evitar atributos com espaços.

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
prod2['DescontoLegal'] = 0.10

console.log(prod2)