function receberPrimeiroEUltimoElemento(entrada) {
    const arrayEntrada = entrada
    const tamanhoArray = arrayEntrada.length
    const indiceZero = arrayEntrada[0] 
    function pegarUltimoIndice () {
        for(i = 0; i < arrayEntrada.length; i++) {
            console.log(i)
        }
    }
    pegarUltimoIndice()
    const resultado = [indiceZero, ]
    console.log(resultado)
    }
  
receberPrimeiroEUltimoElemento([1, 2, 3, 'olá'])