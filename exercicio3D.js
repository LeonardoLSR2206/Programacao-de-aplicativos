// Criar um algoritmo para ler o nome e a idade de um grupo de pessoas, sendo o número desse
// grupo determinado pelo usuário. Ao final, o programa deverá imprimir o nome e a idade da pessoa mais
// idosa e o nome e a idade da pessoa mais jovem.

const prompt = require('prompt-sync')();

let repeticoes = Number(prompt("Quantas pessoas?: "));

let nomeMaisVelho = '';
let idadeMaisVelho = -Infinity;

let nomeMaisNovo = '';
let idadeMaisNovo = Infinity;

for(let i = 0; i < repeticoes; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}° pessoa: `);
    let idade = Number(prompt(`Digite a idade da ${i + 1}° pessoa: `));
    console.log('\n');

    if(idade > idadeMaisVelho) {
        idadeMaisVelho = idade;
        nomeMaisVelho = nome;
    }

    if(idade < idadeMaisNovo) {
        idadeMaisNovo = idade;
        nomeMaisNovo = nome;
    }
}

console.log("\nPessoa mais velha:");
console.log(`Nome: ${nomeMaisVelho}, Idade: ${idadeMaisVelho}`);

console.log("\nPessoa mais nova:");
console.log(`Nome: ${nomeMaisNovo}, Idade: ${idadeMaisNovo}`);
