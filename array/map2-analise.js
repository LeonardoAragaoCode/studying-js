Array.prototype.map2 = function(callback) { //Simulação de um ".map"
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        let result = callback(this[i],i,this)
        console.log(`resultado de ${callback} recebendo (${this[i]}, ${i}, [${this}]) como parâmetro = ${result}`)//Note que como a nossa função callback possui apenas um único parâmetro, ela vai receber apenas o valor de this[i], e os demais parâmetros serão desconsiderados.
        newArray.push(result)
        console.log(`Array final: ${newArray}\n\n`)
    }
    return newArray
}

const nums = [1, 2, 3, 4, 5]
const soma10 = e => e + 10
const resultado2 = nums.map2(soma10)
console.log(resultado2)