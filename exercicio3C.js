const prompt = require("prompt-sync")();

let  salarios = [];
somatoria = 0;

for(let i = 0; i < 2; i++) {
    let salario;
    salario = Number(prompt("Digite o salário do funcionário: "))
    somatoria += salario;
    salarios.push(salario);
    console.log("-----------");
}

console.log(`A folha de pagamentos é de: R$${somatoria.toFixed(2)}`);
console.log(`A média salarial é de: R$${(somatoria / salarios.length).toFixed(2)}`);