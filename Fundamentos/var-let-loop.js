// Utilizando o "var"
console.log("Utilizando o var")

for (var a = 0; a < 10; a++) {
    console.log(a)
}

console.log(a) 

// E agora, o "let"
console.log("Utilizando o let")

for (let b = 0; b < 10; b++) {
    console.log(b)
}
//console.log(b) // Não é possível imprimir o "b" com ele fora do escopo com o "let".