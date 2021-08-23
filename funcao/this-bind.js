const pessoa = {
    saudacao: 'Bom dia!',
    falar () {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // Ocorre um conflito, pois, agora, o "this" já se refere a outro.

const falarDePessoa = pessoa.falar.bind(pessoa) //o método ".bind" fixa o "this" no qual eu definir entre os "()".
falarDePessoa() 