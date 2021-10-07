const alunos = [
    {nome: "João", nota: 6.5, bolsista: false},
    {nome: "Guilherme", nota: 8.5, bolsista: true},
    {nome: "Beatriz", nota: 10, bolsista: false},
    {nome: "Ana", nota: 7.0, bolsista: true}
]

console.log(alunos.map(a => a.nota)) //Cria um array somente com as notas

//".reduce" tem uma função de acumular arrays e fazer uma operação que voce preferir

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual) //Só para ver como funciona o processo
    return acumulador + atual //No caso eu quero
})

console.log(`Resultado da acumulação: ${resultado}`)

/* Posso também colocar um número inicial ao invés do "6.5" como inicial.
* Observe a posição na qual ele deve estar:
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual) 
    return acumulador + atual
}, 50)
*/
