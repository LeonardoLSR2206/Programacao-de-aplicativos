const prompt = require("prompt-sync")();
let soma = 0;

for (let i = 11; i < 30; i++) {
    if (i % 2 !== 0) {
        soma += i;
    }
}

log.console("A soma dos ímpares entre 10 e 30 é:", soma);