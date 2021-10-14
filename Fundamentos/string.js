const escola = "Cod3r"

//Observação: Quando realizar a contagem dos caractere, começa a contar do 0.

console.log(escola.charAt(4)) //Mostra o 4º caractere
console.log(escola.charAt(5)) //Retorna vazio porque não tem 5º caractere
console.log(escola.charCodeAt(3)) //Gera o código Unicode do 3º caractere 
console.log(escola.indexOf('r')) //Diz a posição dele na string

console.log(escola.substring(1)) //Começa a aparecer do 1º caractere
console.log(escola.substring(0,3)) // Aparecer 3 caractere, começando do 0

console.log('Escola '.concat(escola).concat("!")) //".concat" = concatenar, juntar os termos. Pode também ser usado o sinal de "+".
console.log(escola.replace(3, "e")) //Substitui o 3º caractere pelo "e".

console.log('Ana,Maria,Pedro'.split(',')) //Cria um Array e a vírgula serve como um parâmetro para saber onde começar a dividir.
console.log('Leonardo está estudando Javascript'.split(' ')) //Aqui o critério para a separação em arrays foi o espaço.