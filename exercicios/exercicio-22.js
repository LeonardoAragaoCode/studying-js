//Resolução do professor:
function funcaoDaSorte(numeroEscolhido) {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    return (numeroAleatorio === numeroEscolhido ? 
        `Parabéns! O numero sorteado foi ${numeroAleatorio}` :
        `Que pena, o numero sorteado foi ${numeroAleatorio}`)
}

console.log(funcaoDaSorte(5))