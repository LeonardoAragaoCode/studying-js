{
//Observe que o "var", se eu colocar o "var a = 1" ele muda o 10 para 1.
var a = 10;
var a = 1;
console.log (a);
}

{
//Já o let, que é a maneira moderna de usar variáveis, não acontece essa "estranheza acima".
let b = 20;
//let b = 2 ; //Coloque essa sentença sem comentário e veja o resultado.
console.log (b);
}

{
// "constante (const)" é inalterável.
const c = 50;
//const c = 500;
console.log(c);
}

