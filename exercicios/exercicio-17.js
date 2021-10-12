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
