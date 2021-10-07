// Minha resolução:
function filtrarNumeros(entrada) {
    const arrayCompleto = entrada
    const somenteN = function somenteNumero(numero) { 
        const tipo = typeof numero
        if(tipo == "number") {
        return numero
       }
    }
    const arrayNumeros = arrayCompleto.map(somenteN)
    
    const retirarUndefined = elementos => elementos != undefined
    console.log(arrayNumeros.filter(retirarUndefined))
}

filtrarNumeros([1, "a", 2, "b", 3, "d", "101", 4, "lol", 5, "teste"])

// Resolução do professor:
function filtrarNumeros1(array) {
    const resultado = []
    for(let item of array) {
        if(typeof item === "number"){
            resultado.push(item)
        }
    }
    return resultado
}

console.log(filtrarNumeros1([1, "a", 2, "b", 3, "c"]))

// 2º Resolução do professor:
function filtrarNumeros2(array) {
    return array.filter( item => typeof item === "number")
}

console.log(filtrarNumeros2([10, "a", 20, "b", 30, "c"]))