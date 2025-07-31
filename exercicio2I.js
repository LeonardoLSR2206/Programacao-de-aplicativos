const prompt = require("prompt-sync")();
let tempo = Number(prompt("Digite há quanto tempo você fuma (em anos): "));
let cigarroPorDia = Number(prompt("Digite quantos cigarros você fuma por dia: "));
let precoCigarro = Number(prompt("Digite o preço do maço de 20 cigarros: "));
let ano = 365;

let totalCigarros = tempo * ano * cigarroPorDia;
let totalMacos = totalCigarros / 20;
let custoTotal = totalMacos * precoCigarro;

if(custoTotal > 10000) {
    console.log(`Você gastou muito com cigarros nos últimos ${tempo} anos.`);
} else {
    console.log(`Você gastou R$${custoTotal.toFixed(2)} com cigarros nos últimos ${tempo} anos.`);
}