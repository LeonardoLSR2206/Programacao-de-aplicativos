const prompt = require("prompt-sync")();

let experiencia = 0;

for(let i = 1; i <= 10; i++){
    experiencia += 10;
    console.log(`Batalha ${i}: Venceu! +10 Experiência`);
    console.log(`Experiência atual: ${experiencia}\n`);
}