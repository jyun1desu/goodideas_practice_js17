//使用者輸入兩個整數，將它們分別除以3
//判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

const readline = require('readline');
const { confirmInteger , confirmSameRemainder } = require('./Q2_module');

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

            secondQuestion();

        function secondQuestion() {
            rl.question('請輸入第二個整數', (secondStrInput) => {
                let confirmStatus = confirmInteger(secondStrInput);
                if(confirmStatus !== 'integer'){
                    console.log(`${confirmStatus}`);
                    return secondQuestion();
                }

                let result = confirmSameRemainder(firstStrInput,secondStrInput);
                console.log(`${result}`);
                rl.close();
            });
        }

    });
}

main();