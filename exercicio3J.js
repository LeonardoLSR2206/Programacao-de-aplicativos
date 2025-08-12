const prompt = require('prompt-sync')();

let impares = 0;

for(i = 1; i <= 30; i++){
    let numero = Number(prompt(`Digite o ${i}° número inteiro: `));

    if(numero % 2 != 0){
        impares++;
    }
}

console.log(`--------------------------------------------------\n`);
console.log(`O total de números ímpares é: ${impares}`);