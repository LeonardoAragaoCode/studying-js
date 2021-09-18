const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'    
]

carrinho.map(function(preco){
    const transformandoOBJ = JSON.parse(preco)
    const somenteValores = Object.values(transformandoOBJ)
    console.log(somenteValores)
    somenteValores.forEach(function(preco){
        if (preco === Number) {
            console.log(preco)
        }
    })
})