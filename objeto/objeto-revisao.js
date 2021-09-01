const produto = new Object
produto.nome = "Cadeira" //Criando um atributo de maneira inversa(depois de instanciar)
produto['marca do produto'] = 'Genérica' //Criando um atributo de um jeito diferente do método acima
produto.preco = 550

console.log(produto)

delete produto.preco 
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'Ecosport',
    valor: 55000,
    proprietario: {
        nome: 'Roberto',
        idade: 35,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Andressa',
        idade: 45
    }],
    calcularValorSeguro: function(){
        //..
    }
}

carro.proprietario.endereco.numero = 1000 //Alteração no atributo número
carro['proprietario']['endereco']['logradouro'] = 'Rua do alfabeto' //Outro jeito de fazer uma alteração

console.log(carro)
