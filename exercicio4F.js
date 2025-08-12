let vetor = [12, 45, 67, 23, 89, 34, 22, 90, 11, 55, 66, 78, 99, 100, 1, 2, 3, 4, 5, 69, 7, 8, 9, 10, 65, 43, 21, 34, 56, 77];

let maiorValor = vetor[0];
let indiceMaior = 0;

for(let i = 1; i < vetor.length; i++){
    if(vetor[i] > maiorValor){
        maiorValor = vetor[i];
        indiceMaior = i;
    }
}

console.log(`O maior valor é ${maiorValor} e está na posição ${indiceMaior}.`);