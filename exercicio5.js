const prompt = require('prompt-sync')();

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if(num2 === 0) {
        console.log("Não é possível dividir por 0.");
        return null;
    }
    return num1 / num2;
}

for(let i = 1; i <= 2; i++){
    console.log('\nExecução: ');
    let operacao = prompt("Digite a operação (+, -, * ou /): ")
    let a = Number(prompt("Digite o primeiro número: "));
    let b = Number(prompt("Digite o segundo número: "));
    let resultado;

    switch(operacao) {
        case '+':
            resultado = soma(a, b);
            break;
        case '-':
            resultado = subtracao(a, b);
            break;
        case '*':
            resultado = multiplicacao(a, b);
            break;
        case '/':
            resultado = divisao(a, b);
            if (resultado === null) continue;
            break;
        default:
            console.log('Operação inválida.');
            break;
    }

    console.log(`Resultado: ${resultado}`);
}