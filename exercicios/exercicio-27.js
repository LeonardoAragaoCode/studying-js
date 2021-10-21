//Resolução do professor:

function inverter(objeto){
    objetoInvertido = {}

    const buscarEInverter = function(parChaveValor) {
        const chave = 1
        const valor = 0
        objetoInvertido[parChaveValor[chave]] = parChaveValor[valor]
    }
    Object.entries(objeto).forEach(buscarEInverter)

    return objetoInvertido
}
    
console.log(inverter({a: 1, b: 2, c: 3}))

//2º Resolução do professor:

function inverter2(objeto) {
    
    const paresDeChaveValorInvertidos = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverter2({a: 1, b: 2, c: 3}))