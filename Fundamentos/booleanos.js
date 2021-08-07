let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo) // O "!" é negação. O "!!" é negação da negação o que mantém o mesmo.

console.log('os verdadeiros...')
console.log(!!3) //inteiros
console.log(!!-1) //inteiros
console.log(!!' ') //Espaço em branco na string
console.log(!!'texto') //texto na string
console.log(!![]) 
console.log(!!{}) 
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // Sem espaço nem nada.
console.log(!!null) //Nulo
console.log(!!NaN) //Not a Number
console.log(!!undefined) //Indefinido
console.log(!!(isAtivo = false))

console.log('para finalizar ...')
console.log(!!('' || null || 0 || 'texto')) //O "||" faz a função de "ou". O console irá mostrar primeiro o "true", porém se não tiver nenhum, ele vai mostrar "false".

var nome = ''
console.log(nome || 'Desconhecido') //Prioridade ao resultado verdadeiro(true)

var nome = 'Leonardo'
console.log(nome || 'Desconhecido') //Sempre irá mostrar primeiro o resultado verdadeiro(true) 

