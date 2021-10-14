// Minha resolução: 
function contasPalavras(entrada) {
    const frase = entrada
    const arrayPalavras = frase.split(" ")
    const quantidadePalavras = arrayPalavras.length
    return quantidadePalavras
}

console.log(contasPalavras("Sou uma frase"))
console.log(contasPalavras("Estou testando essa função"))

//Resolução do professor foi a mesma que a minha
