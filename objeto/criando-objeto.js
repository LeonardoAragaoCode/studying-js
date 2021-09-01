//Usando uma notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.preco = preco
    this.valorComDesconto = function (){
        return preco * (1 - desconto)
    }
}

const p1 = new Produto("Notebook", 4500, 0.15)
const p2 = new Produto("SSD", 330, 0.10)
console.log(p1.valorComDesconto())
console.log(p2.valorComDesconto())

//Função factory
function criarFuncionario(nome, salarioBase, falta) {
    return {
        nome,
        salarioBase,
        falta,
        getsalario() {
            return (salarioBase / 30) * (30 - falta)
        }
    }
}

const func1 = criarFuncionario('Leonardo', 5500, 3)
const func2 = criarFuncionario('Leandro', 7800, 2)
console.log(func1.getsalario())
console.log(func2.getsalario())

//Object.create
const filha = Object.create(null) 
filha.nome = 'Ana'
console.log(filha)

// Json
const fromJSON = JSON.parse ('{"info": "Sou um JSON"}')
console.log(fromJSON.info)