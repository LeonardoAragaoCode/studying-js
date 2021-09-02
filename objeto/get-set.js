const sequencia = {
    _valor: 1, //Quando colocamos o "_", fica subentendido que esse atributo é interno e reservado.
    get valor() {return this._valor++},
    set valor(valor){
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //Foi ignorado, pois era menor que "this._valor".
console.log(sequencia.valor, sequencia.valor)
