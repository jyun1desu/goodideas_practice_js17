//使用者輸入兩個整數，將它們分別除以3
//判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

const readline = require('readline');
const { confirmInteger } = require('./Q2_modules/confirmInteger');
const { confirmSameRemainder } = require('./Q2_modules/confirmSameRemainder');
const { getRemainderValue } = require('./Q2_modules/getRemainderValue');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
    rl.question('請輸入第一個整數', (firstStrInput) => {
        let confirmStatus = confirmInteger(firstStrInput);
            if(confirmStatus !== 'integer'){
                console.log(`${confirmStatus}`);
                return main();
            }

            let remainderValue = getRemainderValue(firstStrInput);
            console.log(`除以3餘數為${remainderValue}`);
            return secondQuestion();

        function secondQuestion() {
            rl.question('請輸入第二個整數', (secondStrInput) => {
                let confirmStatus = confirmInteger(secondStrInput);
                if(confirmStatus !== 'integer'){
                    console.log(`${confirmStatus}`);
                    return secondQuestion();
                }

                let remainderValue = getRemainderValue(secondStrInput);
                let conculationResult = confirmSameRemainder(firstStrInput,secondStrInput);
                console.log(`除以3餘數為${remainderValue}，${conculationResult}`);
                rl.close();
            });
        }

    });
}

main();