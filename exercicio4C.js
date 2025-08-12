const prompt = require('prompt-sync')();

let notas = [];
let nomes = [];

for(let i = 0; i < 35; i++){
    let nome = prompt(`Digite o nome do aluno ${i + 1}: `)
    let nota = Number(prompt(`Digite a nota do aluno ${i + 1}: `));
    notas.push(nota);
    nomes.push(nome);
    console.log('\n');
}

console.log('Notas iguais ou superiores a 7.0: ');
for(let j = 0; j < notas.length; j++){
    if (notas[j] >= 7) {
        console.log(`${nomes[j]}: ${notas[j]}`);
    }
}