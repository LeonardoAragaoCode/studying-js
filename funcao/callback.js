const fabricantes = ["Mercedes", "Audi", "Honda", "Toyota"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // O interessante é que, quando a função é chamada, os itens do array são "colocados no primeiro parâmetro da função, porém, quando é "executado" o console.log, é invertida a ordem que vão aparecer.

fabricantes.forEach(function(a){ // O "forEach" tem a função de percorrer o Array.
    console.log(a)
})

fabricantes.forEach(a => console.log(a))