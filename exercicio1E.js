const prompt = require("prompt-sync")();
let distancia = Number(prompt("Digite a distância da viagem (em km): "));
let consumo = Number(prompt("Digite o consumo médio do carro (km por litro): "));
let preco = Number(prompt("Digite o preço da gasolina (R$ por litro): "));

let litros_necessarios = distancia / consumo;
let custo_total = litros_necessarios * preco;

console.log("Litros necessários:", litros_necessarios, "L");
console.log("Custo total da viagem: R$", custo_total);
