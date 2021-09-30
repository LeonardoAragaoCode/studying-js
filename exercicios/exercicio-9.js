//Minha resolução
console.log('Minha resolução:')

function repetir(conteudo, quantRepeticao) {
    const resultado = []
    for(i = 0; i < quantRepeticao; i++) {
        resultado.push(conteudo)
    }
    console.log(resultado)
}

repetir(5, 10)
repetir('lol', 3)