const prompt = require('prompt-sync')();

let notas = [];

for(let i = 0; i < 35; i++){
    let nota = Number(prompt(`Digite a nota do aluno ${i + 1}: `));
    notas.push(nota);
}

console.log('Notas iguais ou superiores a 7.0: ');
for(let j = 0; j < notas.length; j++){
    if (notas[j] >= 7) {
        console.log(`Aluno ${j + 1}: ${notas[j]}`);
    }
}