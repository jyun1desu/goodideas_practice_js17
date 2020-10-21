// 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數 function divi(n)
// 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0

const readline = require('readline');
const divi = require('./Q8_modules/caculationResult');
const confirmPositiveInteger = require('./Q8_modules/confirmPositiveInteger');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
    rl.question('請輸入一個正整數，以求該數字除以三多少次後，小數第二位會為零', (strInput) => {
        let isPositiveInteger = confirmPositiveInteger(strInput);
        if(isPositiveInteger !== 'positiveInteger'){
            console.log(isPositiveInteger)
            main();
        }
            let result = divi(strInput);
            console.log(`${result}`);
            rl.close();
        } 
    );
}

main();