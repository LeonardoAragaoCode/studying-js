let valor // não inicializada
console.log(valor) // retorna "undefined"

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) --> Quando o for "null", não pode colocar nenhum operador "." alguma coisa

const produto = {}
console.log(produto.preco) 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// "delete produto.preco" serve para deletar esse ".preco"
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto) 

