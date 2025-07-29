const prompt = require("prompt-sync")();
let valor = 120;

let desconto = (valor/100) * 15;
let pos_desconto = valor - desconto;
let taxa = 10;
let final = pos_desconto + taxa;

console.log(final);