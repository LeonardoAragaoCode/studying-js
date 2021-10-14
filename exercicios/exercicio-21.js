//Minha resolução:
function menorNumero(entrada) {
    const todosNumeros = entrada
    let menor = todosNumeros[0]
    
    const escanearMenor = function (valor) {
        if(valor < menor) {
            menor = valor
        }
    }

    todosNumeros.forEach(escanearMenor) 
    return menor
}

console.log(menorNumero([10, 5, 40, 1, 500]))

//Resolução do professor:
function menorNumero1(numeros) {
    let menor = numeros[0]

    for(let i in numeros){
        if(numeros[i] < menor){
            menor = numeros[i]
        }
    }

    return menor
}

console.log(menorNumero1([10, 5, 40, 1, 500]))

//2º Resolução do professor:
function menorNumero2(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

console.log(menorNumero1([10, 5, 40, 1, 500]))

//3º Resolução do professor:
function menorNumero3(numeros) {
    return Math.min(...numeros)
}
console.log(menorNumero1([10, 5, 40, 1, 500]))



