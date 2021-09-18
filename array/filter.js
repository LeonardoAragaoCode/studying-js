const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Caixa de água', preco: 3500, fragil: false},
    {nome: 'Copo de vidro', preco: 19.80, fragil: true},
    {nome: 'Notebook', preco: 8.00, fragil: false}
]

//Jeito que eu fiz como desafio:

const maior2000 = produtos.filter(function(p){
    return p.preco > 2000
})

const fragilMaior2000 = maior2000.filter(function(f){
    return f.fragil
    //return f.fragil === true //Não é necessário colocar "=== true" por causa que no método filter todo retorno "true", que já foi definido lá no objeto, vai aparecer no filtro.
})

console.log(maior2000)
console.log(fragilMaior2000)

//Jeito que o professor fez:

const caro = produto => produto.preco >= 2000
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))