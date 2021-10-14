//Minha resolução:
function calcularMedia(entrada){
    const arrayComNumeros = entrada
    const totalDeNumeros = arrayComNumeros.length

    const soma = (acumulador, valorAtual) => acumulador + valorAtual
    const totalSoma = arrayComNumeros.reduce(soma)

    const media = totalSoma / totalDeNumeros

    return media
}

console.log(calcularMedia([10, 10, 10, 10]))
console.log(calcularMedia([6.5, 7.5, 8.0, 10]))

//Resolução do professor:
function calcularMedia1(numeros) {
    const quantidadeDeNumeros = numeros.length 
    let somaTotal = 0

    for(let numero of numeros) {
        somaTotal += numero
    }

    return somaTotal / quantidadeDeNumeros
}

console.log(calcularMedia1([10, 10, 10, 10]))
console.log(calcularMedia1([6.5, 7.5, 8.0, 10]))

//2º Resolução do professor: 

function calcularMedia2(numeros) {
    const quantidadeDeNumeros = numeros.length 
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)

    return somaTotal / quantidadeDeNumeros
}

console.log(calcularMedia2([10, 10, 10, 10]))
console.log(calcularMedia2([6.5, 7.5, 8.0, 10]))
