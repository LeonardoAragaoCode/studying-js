function cumprimentar (nome) {
    console.log(`Olá, ${nome}!`)
}

cumprimentar('Leonardo')

//Esse código foi o jeito do professor de resolver a questão:
function cumprimentar2(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
    }
    
console.log(cumprimentar2('Leandro'))