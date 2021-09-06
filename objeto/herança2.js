const pai = {nome: 'Pedro', corDoCabelo: 'Preto'}

console.log("Filha 1")
const filha1 = Object.create(pai) //Quando eu utilizo o "Object.create", é criado um objeto que já se refere ao protótipo
filha1.nome = 'Ana'
console.log(filha1) //Observa que ele não mostrou a cor, mas ela está herdada.
console.log(filha1.corDoCabelo) //Se eu chamar em específico, a cor apareceu.

console.log("filha2")
const filha2 = Object.create(pai, {
    nome: {value: 'Maria', writable: false, enumerable: true}
})
console.log(filha2)
filha2.nome = 'Carla' 
console.log(filha2.nome) //Não foi alterado, por causa do "writable: false" acima.
console.log(`A ${filha2.nome} tem cabelo ${filha2.corDoCabelo} `) 

console.log("Testando keys")
console.log(Object.keys(filha1)) 
console.log(Object.keys(filha2))

console.log("testando for in")

for(let key in filha2) { //O "for in" vai procurar tanto no objeto quanto no seu protótipo(pai).
    filha2.hasOwnProperty(key) ? //Esse método está verificando se o atributo pertence ao objeto.
    console.log(key) : console.log(`Por herança: ${key}`) //True : False
}