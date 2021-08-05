const peso1 = 1.3;
const peso2 = Number('2.0'); 

/* 
* Number é uma função
* 2.0 está vindo como uma string
* "N" deve ser maiúsculo. Cuidado!
*/

console.log(peso1, peso2);
console.log(typeof Number); //Tipo função
console.log(typeof peso1); //Tipo number
console.log(typeof peso2); //Tipo number
console.log(Number.isInteger(peso1)); 
console.log(Number.isInteger(peso2));
// "Number.isInterger" é um método para saber se o número é inteiro.

const avaliacao1 = 9.250;
const avaliacao2 = 8.540;

const total = avaliacao1 * peso1 + avaliacao2 * peso2 ;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); //O método ".toFixed" coloca um limite nas casas decimais
console.log(media.toString(2)); // O método ".toString" transforma em binário

{
    //Algumas observações:
    console.log("Algumas observações:");
    console.log(7 / 0); //Dividir por 0, gera "Infinity".
    console.log("10" / 2); //Operação com número dentro da string
    console.log("3" + 2) 
    //Importante observar que como o "+" serve também para concatenar, ele não vai realizar operação aritmética.
    console.log("3" - 2) 
    //Aqui vai ser realizada a subtração por causa que o sinal "-" não tem outra relevância no código.
    console.log("Show!" * 2); // Gera "NaN" = Not a Number 
    console.log(0.1 + 0.7)
    //console.log(10.toString()) //O ".toString" não pode ser aplicado diretamente ao 10.
    console.log((35.1245).toFixed(2)) 
    //Se for colocado o número entre parêntese, aí é possível aplicar o método. 
}
