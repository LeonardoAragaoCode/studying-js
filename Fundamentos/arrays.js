const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores [0], valores[3])
console.log(valores[4]) //Quando não corresponde a nada, ele retorna indefinido(undefined).

valores[4] = 10 //Um jeito de inserir os dados no array.
console.log(valores) 
console.log(valores.length) //Mostra o tamanho da array.

valores.push({id: 3}, false, null, 'teste') //Insere dados no array.
console.log(valores)

console.log(valores.pop()) //".pop" retira o último dado do array.
delete valores[0] //Deleta um dado específico.
console.log(valores)

console.log(typeof valores) //O array é do tipo objeto(object)