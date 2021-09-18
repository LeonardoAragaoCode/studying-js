//Linha 2 até 6 é uma "simulação" de um forEach
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ["Maria", "Bia", "João", "Marcos"]

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome} `)
})
