const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

console.log('Método .pop')
pilotos.pop() //Remove o último
console.log(pilotos)

console.log('Método .push')
pilotos.push('Verstappen') //Adiciona no último
console.log(pilotos)

console.log('Método .shift')
pilotos.shift() //Remove o primeiro
console.log(pilotos)

console.log('Método .unshift')
pilotos.unshift('Hamilton') //Adiciona no primeiro
console.log(pilotos)



console.log('Método .slice')  //IMPORTANTE: É DIFERENTE DO MÉTODO ".splice"  
const algunsPilotos1 = pilotos.slice(2) //Cria um novo Array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(0, 3) //Cria um novo Array, porém começa do índice 0 até 3. Cuidado! O índice 3 não entra.
console.log(algunsPilotos2)

