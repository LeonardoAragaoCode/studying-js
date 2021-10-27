//Minha resolução:
function segundoMaior(arrayNumeros){
    let maiorNumero = 0
    let segundoMaiorNumero = 0
    let indiceMaior = 0
    
    arrayNumeros.forEach(function(numero, indice){
        if(numero > maiorNumero){
            maiorNumero = numero
            indiceMaior = indice
        }
    })
    
    delete arrayNumeros[indiceMaior]
    arrayNumeros[indiceMaior] = 0
    arrayNumeros.sort()
    
    for(numero of arrayNumeros) {
        if(numero > segundoMaiorNumero) {
            segundoMaiorNumero = numero
        }
    }

    return segundoMaiorNumero
}

console.log(segundoMaior([1, 2, 10, 150, 300]))

//Resolução do professor:  
function segundoMaior1(numeros){
    let indiceDoMaior = 0
    let segundoMaior = 0

    numeros.forEach((numero, indice) => {
        if(numero > numeros[indiceDoMaior])
            indiceDoMaior = indice
    })

    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]

    numeros.forEach(numero => {
        if(numero > segundoMaior)
            segundoMaior = numero
    })

    return segundoMaior
}

console.log(segundoMaior1([1, 2, 10, 150, 300]))

//2º Resolução do professor:
function segundoMaior2(numeros){
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)

    return segundoMaior
}

console.log(segundoMaior2([1, 2, 10, 150, 300]))

//3º Resolução do professor:
function segundoMaior3(numeros){
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]

    return segundoMaior
}

console.log(segundoMaior3([1, 2, 10, 150, 300]))
