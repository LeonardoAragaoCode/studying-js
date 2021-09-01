// Exemplo 1
const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //Esse era o jeito mais antigo
const obj2 = {a, b, c} //Forma reduzida. 
console.log(obj1)
console.log(obj2)

//Exemplo 2
const nomeAttr = 'Nota'
const valorAttr = 7.58

const obj3 = {}
obj3[nomeAttr] = valorAttr 
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//Exemplo 3
const obj5 = {
    function1: function() {
        //...
    }, 
    function2() {
        //...
    }
}
console.log(obj5)
