// Algumas observações sobre o "for":

const array = [1, "Pedro", 2,"Maria", 3, "João"]

//Aqui o "for" somente pega elementos:
for (let item of array) { 
    console.log(`item = ${item}`)
}

//Neste caso o "for" só trabalha com os índices dos arrays:
for(i in array) { 
    console.log(`i = ${i}`)
    
}

const objeto = {
    nome: "Pedro",
    profissao: "Desenvolver de software"
}

for(let chave in objeto) { 
    console.log(`chave = ${chave}`) //Observe que o for está pegando somente as chaves
    console.log([ chave, objeto[chave] ])
}