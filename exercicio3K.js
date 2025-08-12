let qtdMulheres21 = 0;
let qtdHomens18 = 0;
let somaIdadeHomens = 0;
let somaIdadeMulheres = 0;
let qtdHomens = 0;
let qtdMulheres = 0;

for (let i = 1; i <= 200; i++) {
    let nome = prompt(`Digite o nome do estudante ${i}:`);
    let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
    let sexo = prompt(`Digite o sexo de ${nome} (M/F):`).toUpperCase();

    if (sexo === 'F') {
        qtdMulheres++;
        somaIdadeMulheres += idade;
        if (idade > 21) {
            qtdMulheres21++;
        }
    } else if (sexo === 'M') {
        qtdHomens++;
        somaIdadeHomens += idade;
        if (idade > 18) {
            qtdHomens18++;
        }
    }
}

let mediaIdadeHomens = qtdHomens > 0 ? (somaIdadeHomens / qtdHomens) : 0;
let mediaIdadeMulheres = qtdMulheres > 0 ? (somaIdadeMulheres / qtdMulheres) : 0;

console.log(`Mulheres com mais de 21 anos: ${qtdMulheres21}`);
console.log(`Homens com mais de 18 anos: ${qtdHomens18}`);
console.log(`Média de idade dos homens: ${mediaIdadeHomens.toFixed(2)}`);
console.log(`Média de idade das mulheres: ${mediaIdadeMulheres.toFixed(2)}`);