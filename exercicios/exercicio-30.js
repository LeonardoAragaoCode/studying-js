//Minha resolução:
function receberMelhorEstudante(objetos){
    objetoComMedias = {}
    for(let chaves in objetos){
        let arrayTrabalhado = objetos[chaves]
        let soma = 0
        const tamanhoArray = arrayTrabalhado.length

        for(numeros of arrayTrabalhado){
            soma += numeros
        }
        
        mediaDosValores = soma / tamanhoArray
        objetoComMedias[chaves] = mediaDosValores
    }

    let maiorMedia = 0
    let nome = 
    objetoComMediasEmArray = Object.entries(objetoComMedias)
    objetoComMediasEmArray.forEach(function (array){
        if(array[1] > maiorMedia){
            maiorMedia = array[1]
            nome = array[0]
        }
    })
    
    resultado = {}
    resultado.nome = nome
    resultado.media = maiorMedia
    return resultado
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))

//Resolução do professor:

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function receberMelhorEstudante1(estudantes) {
const estudantesComMedias = Object.entries(estudantes).map( estudante => {
const chave = 0,
valor = 1
return { nome: estudante[chave], media: media(estudante[valor]) }
})
const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
const melhorEstudante = estudantesOrdenados[0]
return melhorEstudante
}

console.log(receberMelhorEstudante1({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))