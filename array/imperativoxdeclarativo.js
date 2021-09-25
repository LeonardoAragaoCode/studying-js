const alunos = [
{nome: 'João', nota: 9.5},
{nome: 'Maria', nota: 7.6},
]


//Imperativo:
let total1 = 0 
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
// É um código que vai poder ser pouco reutilizado, pois é único dependendo da situação. 
console.log(total1 / alunos.length)


//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total1 / alunos.length)

