const criarPessoa = function (nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}
 
const pessoas = new criarPessoa ("Leonardo")
pessoas.falar()
