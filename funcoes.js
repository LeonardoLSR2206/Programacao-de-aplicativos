// PROCEDIMENTO (NÃO TEM RETORNO)

//CHAMADA

let saidugh = "iuasg";
let asdyuahi ="sfiodjhn";
let mensagemEnviada = mostrarMensagem(saidugh,asdyuahi);
console.log(mensagem);

//DECLARAÇÃO
function mostrarMensagem(nome, sobrenome){
    console.log(`Olá ${nome} ${sobrenome} `);
    return true;
}

//FUNÇÃO (POSSUI RETORNO)

//CHAMADA
// let resultado = somar(3,8);
// console.log(resultado);

console.log(somar(3,8));

// DECLARAÇÃO
function somar(num1, num2){
    return num1 + num2;
}

let notas = [7, 5.5, 8.5, 10, 2.5];
console.log(calcularMedia(notas));

let temposIG = [2.5, 5.3, 8.1]
console.log(calcularMedia(temposIG))

function calcularMedia(numeros){
    if(numeros.length <= 0){
        return 0;
    }

    let soma = 0;

    numeros.forEach(element => {
        soma += element;
    });

    return soma / numeros.length;
}
