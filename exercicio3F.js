// Romário tem 1,50m e cresce 2 centímetros por ano, enquanto Bebeto tem 1,10 e cresce 3
// centímetros por ano. Construa um algoritmo que calcule em quantos anos Bebeto será maior que
// Romário.

let alturaRomario = 1.50;
let alturaBebeto = 1.10;
let anos = 0;

// do{
//     anos++;
//     alturaRomario += 0.02;
//     alturaBebeto += 0.03;

//     if(alturaRomario >= alturaBebeto) {
//         console.log(`Em ${anos} anos, Bebeto terá ${alturaBebeto.toFixed(2)}m de altura e Romário terá ${alturaRomario.toFixed(2)}m. (Bebeto ainda será mais baixo)\n`);
//     } else {
//         console.log(`Em ${anos} anos, Bebeto terá ${alturaBebeto.toFixed(2)}m de altura e Romário terá ${alturaRomario.toFixed(2)}m. (Bebeto agora será mais alto!)\n`);
//     }
// } while (alturaRomario > alturaBebeto);

// console.log(`\n\nLevaria ${anos} anos para Bebeto ficar mais alto que Romário.`);

while(alturaRomario > alturaBebeto) {
    anos++;
    alturaRomario += 0.02;
    alturaBebeto += 0.03;
}

console.log(`\nLevaria ${anos} anos para Bebeto ficar mais alto que Romario.\n`);
console.log(`Altura final Romário: ${alturaRomario.toFixed(2)}`);
console.log(`Altura final Bebeto: ${alturaBebeto.toFixed(2)}\n`);