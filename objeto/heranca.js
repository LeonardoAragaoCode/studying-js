//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' //Não é recomendado colocar um atributo no "Object.prototype" como no exemplo.
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'D'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //Primeiro irá procurar no filho, e se não achar, irá procurar no pai e depois no avo. 
//Importante! Por mais que o "attr3" também esteja na "const pai", ela não será considerada, pois já tem uma na "const filho".


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velMax: 340
}

const volvo = {
    modelo:'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //O "super" vai pegar a função "status" do seu protótipo. Se eu colocasse o "this", irar formar um loop no status dessa mesma constante "volvo".
    }
}

Object.setPrototypeOf(ferrari ,carro) // A ordem importa. O primeiro é objeto e o segundo é o protótipo do primeiro.
Object.setPrototypeOf(volvo , carro)

console.log(ferrari)
console.log(volvo) //Observa que por mais que a const "carro" seja protótipo da const "volvo", e sim, está herdando as suas características, quando é utilizado o console.log, ele não aparece, mas "ocultamente" está.

volvo.acelerarMais(100)
console.log(volvo.status())

volvo.acelerarMais(300)
console.log(volvo.status())
