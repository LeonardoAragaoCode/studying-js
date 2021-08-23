// Função em JS é First-Class Object (citizen)
// Higher-order function

//Criar de uma forma literal
function fun1() { } 
// É obrigatório o uso das chaves (bloco) //Quando vazio, retorna "undefined"

//Armazenar em uma variável ou constante
const fun2 = function () {}

//Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,2))

//Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//Passar um função como parâmetro
function run (fun) {
    fun ()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //Observe que não pode ser (2, 3, 4)

const cincoMais = soma(2, 3) //Pode ser utilizado desse jeito também.
cincoMais(4) 
