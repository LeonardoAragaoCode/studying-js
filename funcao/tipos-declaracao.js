console.log(soma(2, 2)) 

//Function declaration //Esse tipo de declaração permite que se chame a função antes
function soma(a, b) {
    return a + b 
}

//Function expression //Deve-se chamar a função após ela
const sub = function(a, b) {
    return a - b
}

console.log(sub(10, 6))

//Named function express //Essa também deve ser chamada após
const mult = function mult(a, b) {
    return a * b
}
console.log(mult(2, 2))