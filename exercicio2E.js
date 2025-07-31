const prompt = require("prompt-sync")();

let numeros = [];

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`Digite o ${i}º número: `));
    numeros.push(numero);
}

let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

console.log("O maior número é:", maior);
console.log("O menor número é:", menor);
