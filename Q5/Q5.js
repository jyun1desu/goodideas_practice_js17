////寫一個遞迴函數 function umleven(n) 來求算 2*4 + 4*6 + 6*8...+(n-2)*n
//n最小為 4, 只會出現偶數

const readline = require('readline');
const caculationResult = require('./Q5_modules/caculationResult');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
    rl.question('請輸入一個不小於4的偶數', (strInput) => {
        try {
            let result = caculationResult(strInput);
            console.log(`${result}`);
            
            rl.close();
        } catch (error) {
            console.log('error', error)
            main();
        }
    });
}

main();