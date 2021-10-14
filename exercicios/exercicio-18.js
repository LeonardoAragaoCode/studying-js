// Minha resolução:

function despesasTotais(entrada) {
    const arrayComObjetos = entrada
    const somentePreco = atributos => atributos.preco
    const soma = (acumulador, numeroAtual) => acumulador + numeroAtual
    const totalDespesas = arrayComObjetos.map(somentePreco).reduce(soma)
    return totalDespesas
}

console.log(despesasTotais([
    {nome: "Ônibus", categoria: "Transporte", preco: 250.00},
    {nome: "Supermercado", categoria: "Alimentação", preco:300.00},
    {nome: "Streaming", categoria: "Lazer", preco: 30.00}
]))

//Resolução do professor:

function despesasTotais1(itens) {
    let total = 0
    
    for(let item of itens) {
        total += item.preco
    }

    return total
}

console.log(despesasTotais1([
    {nome: "Ônibus", categoria: "Transporte", preco: 250.00},
    {nome: "Supermercado", categoria: "Alimentação", preco:300.00},
    {nome: "Streaming", categoria: "Lazer", preco: 30.00}
]))

//2º Resolução do professor:
function despesasTotais2(itens) {
    return itens.map(item => item.preco).reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

console.log(despesasTotais2([
    {nome: "Ônibus", categoria: "Transporte", preco: 250.00},
    {nome: "Supermercado", categoria: "Alimentação", preco:300.00},
    {nome: "Streaming", categoria: "Lazer", preco: 30.00}
]))

//3º resolução do professor:
function despesasTotais3(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}

console.log(despesasTotais3([
    {nome: "Ônibus", categoria: "Transporte", preco: 250.00},
    {nome: "Supermercado", categoria: "Alimentação", preco:300.00},
    {nome: "Streaming", categoria: "Lazer", preco: 30.00}
]))


