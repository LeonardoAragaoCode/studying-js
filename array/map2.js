const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'    
]

const paraObjeto = json => JSON.parse(json) // "JSON.parse" transforma o JSON em objeto
const apenasPreco = produto => produto.preco //".preco" vai direito no atributo que eu quero

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
