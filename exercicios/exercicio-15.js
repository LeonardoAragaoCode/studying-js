//Resolução do professor:
function receberSomenteOsParesDeIndicesPares1(numeros) {
    let resultado = []
    for(let i = 0; i < numeros.length; i += 2){
        const numeroPar = numeros[i] % 2 === 0
        if(numeroPar) {
            resultado.push(numeros[i])
        }
    }
    return resultado
}
    
console.log(receberSomenteOsParesDeIndicesPares1([1, 2, 4, 5, 6]))
    

//2º Resolução do professor:
function receberSomenteOsParesDeIndicesPares2(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
} 

console.log(receberSomenteOsParesDeIndicesPares2([1, 2, 4, 5, 6]))