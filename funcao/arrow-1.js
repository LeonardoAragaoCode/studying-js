// O jeito normal
let dobro = function(a){
    return 2 * a
}
console.log(dobro(Math.PI))

// Utilizando arrow com 1 parâmetro
dobro = a => {  //Quando for utilizar apenas 1 parâmetro, o uso dos parênteses é opcional.
    return 2 * a
}
console.log(dobro(2))

// Utilizando arrow com mais de um paramêtro
soma = (a, b) => {  //É necessário, quando tiver 2 parâmetros ou mais, colocar os parênteses.
    return a + b
}
console.log(soma(4, 4))

// Arrow de um jeito mais curto que acima
dobro = a => 2 * a 
console.log(dobro(5))

//Arrow sem parâmetro
dobro = () => "Olá" // Quando for sem parâmetro, deve-se colocar o "()".
console.log(dobro())
dobro = _ => "Olá" // O underscore(conhecido como underline) é um parâmetro, porém quando for chamar a função, se chamar elar vazia "()" a função irá entender.
console.log(dobro()) 

