//運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
//讓使用者輸入5個字母，字母向後平移3個數，印出加密結果

const readline = require('readline');
const confirmVaildInput = require('./Q16_modules/confirmValidInput');
const shiftCaesarCipher = require('./Q16_modules/shiftCaesarCipher');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
    rl.question('請輸入5個英文字母', (strInput) => {
        let isValidInput = confirmVaildInput(strInput) === "isValidInput"
        if(!isValidInput){
            console.log(`${confirmVaildInput(strInput)}`);
            return main();
        }
        let shiftResult = shiftCaesarCipher(strInput,3)
        console.log(`Caesar cipher輸出結果為：${shiftResult}`);
        rl.close();
      });
}

main();