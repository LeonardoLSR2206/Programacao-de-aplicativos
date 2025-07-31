const prompt = require("prompt-sync")();
let largura = Number(prompt("Digite a largura do terreno (em metros): "));
let comprimento = Number(prompt("Digite o comprimento do terreno (em metros): "));
let area = largura * comprimento;

console.log(`Área total: ${area} m²`);

if (area >= 0 && area <= 49) {
    console.log("Classificação: Mercearia");
} else if (area >= 50 && area <= 399) {
    console.log("Classificação: Mercadinho");
} else if (area >= 400 && area <= 999) {
    console.log("Classificação: Mercado");
} else if (area >= 1000 && area <= 2499) {
    console.log("Classificação: Supermercado");
} else if (area >= 2500) {
    console.log("Classificação: Hipermercado");
} else {
    console.log("Área inválida.");
}