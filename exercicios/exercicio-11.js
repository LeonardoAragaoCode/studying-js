//Resolução do professor:
function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]
    return [primeiroElemento, ultimoElemento]
    }

    console.log(receberPrimeiroEUltimoElemento(['lol', 2, 5, 8]))

//2º Resolução do professor:
function receberPrimeiroEUltimoElemento2(elementos) {
    const primeiroElemento= elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
    }

console.log(receberPrimeiroEUltimoElemento2(['one', 2, 3, 4]))

//3º Resolução do professor:
function receberPrimeiroEUltimoElemento3([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
    }

console.log(receberPrimeiroEUltimoElemento3([1, 2, 3, 'four']))