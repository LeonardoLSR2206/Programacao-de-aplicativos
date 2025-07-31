const prompt = require("prompt-sync")();
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let media = 7;
let mediaFinal = (nota1 + nota2 + nota3) / 3;

if(mediaFinal >= media) {
    console.log("Aprovado com média", mediaFinal);
} else {
    console.log("Reprovado com média", mediaFinal);
}