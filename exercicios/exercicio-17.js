// Minha resolução:
function somarNumeros(array) {
    const arrayVirgem = array
    const numeros = valor => valor
    const soma = (acumulador, atual) => acumulador + atual

    return arrayVirgem.map(numeros).reduce(soma)
}

console.log(somarNumeros([10, 10, 10, 30]))
console.log(somarNumeros([15, 15, 15, 15]))

//Resolução do professor:
function somarNumeros1(numeros) {
    const quantidadeNumeros = numeros.length

    return (quantidadeNumeros === 0) ? 0 : numeros[0] + somarNumeros1(numeros.slice(1))
}

console.log(somarNumeros1([10, 10, 30]))

//2º Resolução do professor:
function somarNumeros2(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}

console.log(somarNumeros2([100, 100, 200]))

//3º Resolução do professor:
function somarNumeros3(numeros) {
    const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    
    return soma
}

console.log(somarNumeros3([60, 60]))