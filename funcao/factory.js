function criarProduto(a, b){
    return {
        nome: a, 
        preco: b,
    }
}

console.log(criarProduto("Notebook", 3000))

function criarProduto(nome, preco){ //Também tem esse modo de colocar os parâmetros com mesmo nome dos atributos do objeto.
    return {
        nome,  
        preco,
    }
}

console.log(criarProduto("Notebook", 3000))