var preco = 19.90; //Quando for representar preços, deve-se usar "." e não a "," (Padrão americano)
var desconto = 0.4; 
var precocomdesconto = preco * (1 - desconto);

console.log ("O preço do produto é de R$" + preco + "")
console.log ("O desconto é de " + (desconto * 100) + "%")
console.log ("O preço final com desconto fica por " + precocomdesconto)
