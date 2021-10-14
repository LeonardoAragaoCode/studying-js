// Minha resolução:
function contarCaractere(caractereEscolhido, frase){
    const caracteresDaFrase = frase.split("")
    let quantidadeCaracteresIguais = 0
    const caracteresIguais = function (caractereDoArray) {
        if(caractereDoArray === caractereEscolhido) {
            return quantidadeCaracteresIguais += 1
        }
    }
    
    caracteresDaFrase.map(caracteresIguais)

    return quantidadeCaracteresIguais
}

console.log(contarCaractere("a", "Isso é uma frase."))

//Resolução do professor:
function contarCaractere1(caractereBuscado, frase) {
    let contador = 0 

    for(i = 0; i < frase.length; i++) {
        if(frase.charAt(i) === caractereBuscado) {
            contador++
        } 
    }
    return contador
}

console.log(contarCaractere1("a", "Isso é uma frase"))

// 2º Resolução do professor:
function contarCaractere1(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}

console.log(contarCaractere1("a", "Isso é uma frase"))
