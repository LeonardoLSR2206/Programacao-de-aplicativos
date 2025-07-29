const prompt = require("prompt-sync")();
let numeroA = Number(prompt("Digite um número: "));
let numeroB = Number(prompt("Digite um número: "));

console.log("Soma:", numeroA + numeroB);
console.log("Subtração:", numeroA - numeroB);
console.log("Multiplicação:", numeroA * numeroB);
    if(numeroA === 0 || numeroB === 0){
        console.log("Divisão: Impossível dividir por 0.");
    } else {
        let divisao = numeroA / numeroB;
        console.log("Divisão:", divisao);
    }
console.log("Resto da divisão:", numeroA % numeroB);