const nums = [1, 2, 3, 4, 5]

//O método ".map" é como se fosse um "for" com um propósito. Ele percorre o array escolhido e gera outro array com algumas alterações que eu quiser.

const resultado = nums.map(function(e){
    return e * 2
})
console.log(nums, resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

const resultado2 = nums.map(soma10).map(triplo).map(dinheiro)
console.log(resultado2)