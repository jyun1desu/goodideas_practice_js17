//輸入 n 印出 1+2-3+4-5+6...n 的算式與總和
const readline = require('readline');
const resultWithFormula = require('./Q4_modules/resultWithFormula');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function main() {
    rl.question('請輸入任意正整數', (strInput) => {
        try {
            const result = resultWithFormula(strInput);
            console.log(`${result}`);
            
            rl.close();
        } catch (error) {
            console.log(error)
            main();
        }
    });
}

main();