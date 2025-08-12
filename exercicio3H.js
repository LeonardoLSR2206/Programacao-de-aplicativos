const prompt = require("prompt-sync")();

let totalContas = 0;
let contasNegativas = 0;

while (true) {
    let conta = Number(prompt("Digite o número da conta (0 para sair):"));
    if (conta === 0) {
        break;
    }

    let saldo = Number(prompt("Digite o saldo da conta:"));
    
    console.log(`Conta: ${conta} | Saldo: R$ ${saldo.toFixed(2)} | ${saldo >= 0 ? "positivo" : "negativo"}`);

    totalContas++;

    if (saldo < 0) {
        contasNegativas++;
    }
}

if (totalContas > 0) {
    let percentual = (contasNegativas / totalContas) * 100;
    console.log(`Percentual de contas negativas: ${percentual.toFixed(2)}%`);
} else {
    console.log("Nenhuma conta foi informada.");
}