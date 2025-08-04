const prompt = require("prompt-sync")();

for(i = 2; i <= 9; i++) {
    console.log("\n\n______________________");
    console.log(`Tabuada do ${i}:\n`);
        for(j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}\n`);
        }
}