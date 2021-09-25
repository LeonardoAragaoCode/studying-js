//Simulação de ".reduce" SEM um valor inicial:
Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0]
    for (i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const numeros = [1, 2, 3, 4, 5]
soma = (total, valor) => total + valor
console.log( numeros.reduce2(soma))

//Simulação de ".reduce" COM um valor inicial:
Array.prototype.reduce2 = function (callback, valorInicial) {
    indiceAcumulador = valorInicial ? 0 : 1 //Se tiver retorna 0 senão retorna 1
    let acumulador = valorInicial || this[0] //Um ou outro
    for (i = indiceAcumulador; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const numeros2 = [1, 2, 3, 4, 5]
soma = (total, valor) => total + valor
console.log( numeros.reduce2(soma, 100))
