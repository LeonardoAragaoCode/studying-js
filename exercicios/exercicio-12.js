//Minha resolução:
function removerPropriedade(primeiroParametro, segundoParametro) {
    const objetoCompleto = primeiroParametro //Faltou clonar. Olhe exemplo do Prof. abaixo
    const eliminado = segundoParametro
    delete objetoCompleto[eliminado]
    console.log(objetoCompleto)
    
}
removerPropriedade({a: 1, b: 2, teste: 3}, "teste" )


//Resolução do professor:

function removerPropriedade1(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto) //AQUI FOI FEITO A CLONAGEM DO OBJETO
    delete copia[nomeDaPropriedade]
    return copia
}

console.log(removerPropriedade1({a: 1, b: 2, teste: 3}, "b" ))
