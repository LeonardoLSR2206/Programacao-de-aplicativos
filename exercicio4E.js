const prompt = require('prompt-sync')();

let vetor = [];

for(let i = 0; i < 30; i++){
    let valor = Number(prompt(`Digite o valor da posição ${i + 1}: `));
    vetor.push(valor);
}

for(let j = 0; j < 30; j++){
    if(j % 2 === 0){
        vetor[j] = vetor[j] * 1.02;
    } else {
        vetor[j] = vetor[j] * 1.05;
    }
}

console.log('Vetor resultante:\n');
console.log(vetor);