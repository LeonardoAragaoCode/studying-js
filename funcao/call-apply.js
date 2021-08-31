function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 2199.99,
    desc: 0.10,
    getPreco
}

console.log(produto.getPreco())

//A diferença entre o "call" e o "apply" é o jeito de colocar os parâmetros, pois ambas chamam a função requerida.

console.log(getPreco.call(produto, 0.15, "$")) //Os parâmetros da função "call" --> (contexto, parâmetro da função getPreco, parâmetro da função getPreco,)

console.log(getPreco.apply(produto, [0.20, "R$"])) //Aqui, comparado com o de cima, os parâmetros da função "getPreco" devem ser colocados em array. 