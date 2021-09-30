const filhas = ['Maria', 'Ana']
const filhos = ['João', 'Morpheus']
const todos = filhas.concat(filhos) 
console.log(todos)

const todos2 = filhas.concat(filhos, 'Jason', 'Joana') //Também é possível adicionar itens assim 
console.log(todos2)

console.log([].concat([1, 2], [3, 4], 5, [[6,7]])) 


