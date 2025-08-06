const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número (digite 0 para sair): '));

let maior = numero;
let menor = numero;
let soma = 0;
let quantidade = 0;

while(numero !== 0) {
    soma += numero;
    quantidade++;

    if(numero > maior) {
        maior = numero;
    }

    if(numero < menor) {
        menor = numero;
    }

    numero = Number(prompt('Digite outro número (0 para sair): '));
}

console.log('------------------\n\n');
if(quantidade > 0) {
    let media = soma / quantidade;
    console.log(`Maior número: ${maior}`);
    console.log(`Menor número: ${menor}`);
    console.log(`Média aritmética: ${media.toFixed(2)}`);
} else {
    console.log('Nenhum número foi digitado');
}