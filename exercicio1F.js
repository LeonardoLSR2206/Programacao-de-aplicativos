const prompt = require("prompt-sync")();
let valor_total = Number(prompt("O valor total da mesa é: "));
let clientes = Number(prompt("Quantas pessoas efetuarão o pagamento?: "));

let parte = valor_total / clientes;

console.log("Vai ser RS$", parte, "pra cada.");