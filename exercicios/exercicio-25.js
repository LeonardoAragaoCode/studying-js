//Resolução do professor:
function buscarPalavrasSemelhantes1(inicio, palavras) {
    const resultado = []
    for(let palavra of palavras){
        if(palavra.includes(inicio)){
            resultado.push(palavra)
        }
    }
    return resultado
}

console.log(buscarPalavrasSemelhantes1("pro", ["programação", "mobile", "profissional"]))

//2º Resolução do professor:
function buscarPalavrasSemelhantes2(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"]))

