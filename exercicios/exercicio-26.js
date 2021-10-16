//Minha resolução:
function removerVogais(palavra) {
    const palavraDividida = palavra.split("")
    const consoantesDaPalavra = []

    const somenteConsoante = function(caractere){
        if(caractere != "a" && caractere != "e" && caractere != "i" && caractere != "o" &&caractere != "u") {
            consoantesDaPalavra.push(caractere)
        }   
    }
    palavraDividida.forEach(somenteConsoante)
    
    const conversaoEmString = consoantesDaPalavra.join("")

    return conversaoEmString
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Palavras"))
console.log(removerVogais("Leonardo"))

//Minha 2º resolução:

function removerVogais2(palavra) {
    const consoantes = []
    for(i = 0; i < palavra.length; i++){
        if(palavra[i] != "a" && palavra[i] != "e" && palavra[i] != "i" && palavra[i] != "o" &&palavra[i] != "u"){
            consoantes.push(palavra[i])
        }
    }
   
    const conversaoEmString = consoantes.join("")

    return conversaoEmString
}

console.log(removerVogais2("Leonardo"))

//Resolução do professor:
function removerVogaisP1(frase){
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

    vogais.forEach(vogal => frase = frase.replace(vogal, ""))
    
    return frase
}

console.log(`Resolução do professor: ${removerVogaisP1("Leonardo")}`) //Não entendi o por que do ultima vogal não ser retirada.

//2º Resolução do professor:
function removerVogaisP2(frase) {
    return frase.replace(/[aeiou]/ig, "")
}

console.log(`Resolução do professor: ${removerVogaisP2("Leonardo")}`)
