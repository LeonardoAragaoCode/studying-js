console.log(typeof Array, typeof new Array, typeof [])

//Jeitos de adicionar:

let aprovados = new Array('Bia', 'João', 'Maria')
console.log(aprovados)

aprovados = ['Beatriz', 'Leonardo', 'Ana']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo' //Dá tanto para adicionar, como alterar um existente.
aprovados.push('Ahia') //Método .push adiciona um novo elemento ao Array

aprovados[9] = 'Rafael' 
console.log(aprovados.length) //Método .length diz o tamanho do array
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Organiza o Array 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1]) //Foi excluído, mas todos os outros índices permanecem em seus lugares
console.log(aprovados[2]) 

// O método .splice pode adicionar, remover ou remover e adicionar ao mesmo tempo.
aprovados = ['Bia', 'João', 'Ana']
// aprovados.splice(1, 1)  *REMOVENDO
// aprovados.splice(1, 0, 'add1', 'add2') *ADICIONANDO
// aprovados.splice(1, 2, 'alteração1', 'alteração2')  *ALTERANDO
console.log(aprovados)


