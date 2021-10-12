//Minha resolução:
function objetoParaArray(entradaObjeto) {
    return Object.entries(entradaObjeto)
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))

//Resolução do professor:
function objetoParaArray1(objeto) {
    const resultado = []

    for(let chave in objeto) { 
        resultado.push([ chave, objeto[chave] ])
    }
    return resultado
}

console.log(objetoParaArray1({
    nome: "João",
    profissao: "Analista de TI"
}))

//2º Resolução do professor: 
function objetoParaArray2(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chaves => [chaves, objeto[chaves]])

    return resultado
}

console.log(objetoParaArray2({
    nome: "Beatriz",
    profissao: "Analista de dados"
}))

//3º resolução do professor:
function objetoParaArray3(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray3({
    nome: "Carlos",
    profissao: "Engenheiro de software"
}))