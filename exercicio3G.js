let termo1 = 1;
let termo2 = 1;

console.log(termo1);
console.log(termo2);

for(i = 3; i <= 15; i++){
    let proximo = termo1 + termo2;
    console.log(proximo);

    termo1 = termo2;
    termo2 = proximo;
}