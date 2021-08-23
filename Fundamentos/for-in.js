const pessoa = {
    nome: "Leonardo",
    sobrenome: "Aragão",
    idade: 23,
    peso: 68
}

for (atributos in pessoa){
    console.log(atributos,"=", pessoa[atributos])
}

const notas = [1.1,2.2,3.3,4.4,5.5]

for (i in notas) {
    console.log(i,'=', notas[i])
}
console.log(`Total de ${notas.length} índices`)