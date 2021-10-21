//Resolução do professor:
function filtrarPorQuantidadeDeDigitos(array, digito) {
    const resultado = []

    for(numero of array){
        const quantDigitos = String(numero).length
        if(quantDigitos === digito){
            resultado.push(numero)
        }
    }

    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([1, 20, 50, 90, 350], 2))

//2º Resolução do professor:
function filtrarPorQuantidadeDeDigitos2(array, digito) {
    const numDigitosIguais = function (numero) {
        const quantDigitos = String(numero).length
        return quantDigitos === digito
    }
    return array.filter(numDigitosIguais) 
}

console.log(filtrarPorQuantidadeDeDigitos2([1, 20, 50, 90, 350], 2))
