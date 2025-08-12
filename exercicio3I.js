const prompt = require('prompt-sync')();

let N = Number(prompt('Digite o número: '));

console.log(`Divisores de ${N}: `);

for (let i = 1; i <= N; i++){
    if (N % i === 0){
        console.log(i);
    }
}