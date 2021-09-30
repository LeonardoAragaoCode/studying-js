//Minha resolução:
function multiplicar (numero1, numero2) {
    let resultado = numero1
    if (numero2 > 0){
        for (i = 1; i < numero2; i++) {
            resultado += numero1 
        }
        console.log(resultado)
    } else { 
        console.log(0)
    }
}

multiplicar(5, 5)

//Resolução do professor:
console.log('Resolução do professor:')

function multiplicar1(numeroA, numeroB) {
    let resultado = 0
    /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
    realizada aqui para diminuir a quantidade de loops */
    for(let i = 0; i < numeroB; i++)
    resultado += numeroA
    return resultado
    }

console.log(multiplicar1(5, 0))

// 2º Resolução do professor:
console.log('2º Resolução do professor:')

function multiplicar2(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) {
        return 0
    }
    return multiplicador === 1 ? numero : numero + multiplicar2(numero, multiplicador-1)
    }

console.log(multiplicar2(5, 5))