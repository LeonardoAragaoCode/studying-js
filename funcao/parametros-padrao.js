//O uso de algumas estratégias para definir alguns parâmetros como padrão

//1º estratégia 
console.log('1º estratégia')
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma())
console.log(soma(2))
console.log(soma(1, 2, 3))
console.log(soma(0, 0, 0)) //Aqui ocorreria um bug. O "0" é considerado "false", aí ele acaba substituindo pelo "1" que defini como padrão.

//2º, 3º e 4º estratégia
console.log("2º, 3º e 4º estratégia")
function soma2(a, b, c) { //Logo abaixo serão utilizados operadores terciários
    a = a !== undefined ? a : 1 // "a" for estritamente diferente de "undefined". Se for "true" = a e se for "false" = 1
    b = 1 in arguments ? b : 1 // Aqui no caso, ele verifica se no índice 1 possue algo. 
    c = isNaN(c) ? 1 : c  // Se não for um "number", escolherá o "1". Senão escolherá o "c".
    return a + b + c
}
console.log(soma2())
console.log(soma2(2))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0)) //Aqui no caso, não teria problemas com soma de números 0.

//Valor padrão do es2015
console.log("De acordo com o es2015")
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3())
console.log(soma3(2))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))


