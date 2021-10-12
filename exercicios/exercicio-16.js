//Resolução do professor:
function checarAnoBissexto1(ano) {
    const divisivelPorQuatro = ano % 4 === 0
    const divisivelPorCem = ano % 100 === 0
    const divisivelPorQuatrocentos = ano % 400 === 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}

console.log(checarAnoBissexto1(2020))
console.log(checarAnoBissexto1(2021))


//2º resolução do professor:
function checarAnoBissexto2(ano) {
    return new Date(ano, 1, 29).getDate() === 29
} 
//FICA ATENTO! O mês do constructor "Date" começa do 0.
//".getDate" serve para pegar o dia do mês. 

console.log(checarAnoBissexto2(2020))
console.log(checarAnoBissexto2(2021))