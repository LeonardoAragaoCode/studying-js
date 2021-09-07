function MeuObjeto() {}  //Toda função tem um prototype
console.log(MeuObjeto.prototype) //Observa que já existe um objeto

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) //Apontam para o mesmo protótipo
console.log(MeuObjeto.prototype === obj1.__proto__) //Esses "obj" apontam para "MeuObjeto.prototype"

MeuObjeto.prototype.nome = "anônimo"
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = "Leo"
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //Eu fazendo com que o protótipo de "obj3.__proto__" que é "Object.prototype", seja o "MeuObjeto.prototype"
obj3.nome = "Aroldo"
obj3.falar() //Para verifica se o protótipo mudou, testei a referência do nome e da função "falar"
