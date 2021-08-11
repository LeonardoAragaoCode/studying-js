//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // "2 + undefined" = Not a Number
imprimirSoma(2,10,4,5,6,7,8,9,) //Todo resto é ignorado. Somente é considerado o "a" e o "b".
imprimirSoma() // "undefined" + "undefined" = NaN(Not a Number)

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,3))
console.log(soma(2)) // 2 + b(no caso, se não tiver nada, ele é preenchido com "1") 
console.log(soma()) // a(undefined) + b(1) = NaN

// Armazenando uma função em uma variável
const imprimirSubtracao = function (a,b) {
    
}