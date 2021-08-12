var numero = 1
{
    let numero = 2
    {
        let numero = 3
    } 
    console.log('dentro =', numero) //Quando é usado o "let", é procurado primeiro dentro do escopo atual senão ele vai indo para outra camadas externas de escopo.
}
console.log('fora =', numero)