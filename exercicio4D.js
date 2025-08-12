const prompt = require('prompt-sync')();

let vetor1 = [];
let vetor2 = [];
let vetor3 = [];

for(let i = 0; i < 15; i++){
    let numVetor1 = Number(prompt(`Insira o ${i + 1}° número do PRIMEIRO vetor: `));
    vetor1.push(numVetor1);
}

for(let j = 0; j < 15; j++){
    let numVetor2 = Number(prompt(`Insira o ${j + 1}° número do SEGUNDO vetor: `));
    vetor2.push(numVetor2);
}

for(let t = 0; t < 15; t++){
    let numVetor3 = vetor1[t] + vetor2[t];
    vetor3.push(numVetor3);
}

console.log('\n\n');
console.log(`Vetores:\n`);
console.log(`Vetor 1: ${vetor1} \n`);
console.log(`Vetor 2: ${vetor2} \n`);
console.log(`Vetor 3: ${vetor3} \n`);