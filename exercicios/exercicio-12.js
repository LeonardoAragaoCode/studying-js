function removerPropriedade(primeiroParametro, segundoParametro) {
    const objetoCompleto = primeiroParametro
    const eliminado = `"${segundoParametro}"`
    console.log(eliminado)
    delete objetoCompleto[eliminado]
    console.log(objetoCompleto)
}

removerPropriedade({a: 1, b: 2, teste: 3}, "teste")