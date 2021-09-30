function simboloMais(numero) {
    let resultado = ""
    
    for(i = 0; i < numero; i++) {
        resultado += "+"
    }

    console.log(resultado)
}

simboloMais(4)

//Resolução do professor:
console.log('Resolução do professor:')

function simboloMais1(numero) {
    return Array(numero).fill('+').join('')
}

console.log(simboloMais1(4))

////2º resolução do professor:
console.log("2º resolução do professor:")

function simboloMais2(numero) {
    return "+".repeat(numero)
}

console.log(simboloMais2(4))