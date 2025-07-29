const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite um número: "));

if (numero % 3 === 0) {
    console.log("É múltiplo de três.");
} else {
    console.log("Não é múltiplo de três");
}