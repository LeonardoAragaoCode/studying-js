const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `  
    Olá 
    ${nome}!`   //Esse é um jeito de colocar string de uma maneira, talvez, mais prática.

console.log(nome)
console.log(concatenacao)
console.log(template)

//Expressões
console.log(`1 + 1 = ${1+1}`) // A operação deve estar com símbolo do "$" e dentro das chaves "{}".

const up = texto => texto.toUpperCase() // ".toUpperCase" serve para transformar letras em maiúsculas.
console.log(`Ei... ${up('cuidado')}!`) 