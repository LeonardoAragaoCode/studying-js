function inverso(entrada) {
    const tipo = typeof entrada
    
    if(tipo == "boolean") {
        return !entrada
    }
    else if(tipo == "number") {
        return -entrada
    }
    else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
}

console.log(inverso(true))
console.log(inverso(5))
console.log(inverso('teste'))



