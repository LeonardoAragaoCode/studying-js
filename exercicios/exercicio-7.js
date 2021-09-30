function estaEntre (numero, minimo, maximo, inclusivo) {
    if (inclusivo == true) {
        if (numero == minimo || numero == maximo) {
            return true
        } else {
            return false
        }
    } else {
        if (numero > minimo && numero < maximo) {
            return true
        } else {
            return false
        }
    }
}

console.log(estaEntre(50, 100, 500,))
console.log(estaEntre(150, 100, 500,))
console.log(estaEntre(100, 100, 500, true))

//Resolução do professor:
console.log('Resolução do professor:')

function estaEntre1(numero, minimo, maximo, inclusivo) {
    if (inclusivo) {
        return numero >= minimo || numero <= maximo
    }
    return numero > minimo && numero < maximo 
}

console.log(estaEntre(50, 100, 500,))
console.log(estaEntre(150, 100, 500,))
console.log(estaEntre(100, 100, 500, true))

// 2º resolução do professor
console.log('2º resolução do professor:')

function estaEntre2(numero, minimo, maximo, inclusivo) {
    return inclusivo ? numero >= minimo || numero <= maximo : numero > minimo && numero < maior
}

console.log(estaEntre(50, 100, 500,))
console.log(estaEntre(150, 100, 500,))
console.log(estaEntre(100, 100, 500, true))

