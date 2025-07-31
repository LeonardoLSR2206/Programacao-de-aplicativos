const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));
let sexo = prompt("Digite seu sexo (M/F): ").toUpperCase(); 

if (isNaN(idade) || idade < 0 || (sexo !== 'M' && sexo !== 'F')) {
    console.log("Idade ou sexo inválidos.");
} else if (sexo === 'F') {
    if (idade === 18) {
        console.log("Se alistar é opcional.");
    } else if (idade < 18) {
        console.log("Você ainda não precisa se alistar.");
    } else {
        console.log("Você não é obrigada a se alistar.");
    }
} else if (sexo === 'M') {
    if (idade === 18) {
        console.log("Se alistar é obrigatório.");
    } else if (idade < 18) {
        console.log("Você ainda não pode se alistar.");
    } else {
        console.log("Já passou da hora de se alistar.");
    }
}
