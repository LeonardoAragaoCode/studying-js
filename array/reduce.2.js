const alunos = [
    {nome: "João", nota: 6.5, bolsista: false},
    {nome: "Guilherme", nota: 8.5, bolsista: true},
    {nome: "Beatriz", nota: 10, bolsista: false},
    {nome: "Ana", nota: 7.0, bolsista: true}
]

const atrBolsista = a => a.bolsista //Somente o atributo bolsista
const todosBolsista = (resultado, bolsista) => resultado && bolsista //O ".reduce" vai receber essa função que irá usar aquele conhecimento da tabela da verdade. No caso, o uso do "e" representado por "&&". Se todos forem verdadeiros, vai resultar "true".
const algumBolsista = (resultado, bolsista) => resultado || bolsista

//Desafio 1: Todo mundo é bolsista?
console.log(alunos.map(atrBolsista).reduce(todosBolsista))

//Desafio 2: Algum é bolsista?
console.log(alunos.map(atrBolsista).reduce(algumBolsista))
