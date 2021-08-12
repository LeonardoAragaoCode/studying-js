{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}

console.log(sera) // É importante observar que a variável fora do escopo de função, acaba ficando de escopo "global". 

function teste() {
    var local = 123
    console.log(local)
}
teste()
// console.log(local) // não é possível imprimir no console a variável "var" por causa que está no escopo da função. Se o "console.log " estiver fora da função ele não consegue.

//Observação sobre o escopo global
console.log("Obs sobre o escopo global")

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) // Quando é utilizado o "var" não faz diferença em qual escopo global ele está.

