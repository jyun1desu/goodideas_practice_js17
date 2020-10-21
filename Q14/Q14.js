//細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)
//試寫一遞迴函數function twofold(b, m)
//讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m分鐘後的細菌有幾隻。

const readline = require('readline');
const confirmNatureNumber = require('./Q14_modules/confirmNatureNumber');
const twofold = require('./Q14_modules/twoFold');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question('請輸入培養品中細菌數量', (firstStrInput) => {
        let confirmStatus = confirmNatureNumber(firstStrInput);
        if (confirmStatus !== 'natureNumber') {
            console.log(`${confirmStatus}`);
            return main();
        }
        return secondQuestion();

        function secondQuestion() {
            rl.question('請輸入時長(分鐘)，將計算該時長後培養皿中細菌總數量(每20分鐘成長100%)', (secondStrInput) => {
                let confirmStatus = confirmNatureNumber(secondStrInput);
                if (confirmStatus !== 'natureNumber') {
                    console.log(`${confirmStatus}`);
                    return secondQuestion();
                }
                let bacterialAmount = Math.floor(twofold(firstStrInput, secondStrInput));
                let result = `原先細菌數量為${firstStrInput}隻，過了${secondStrInput}分鐘後，細菌數量為${bacterialAmount}隻`
                console.log(result);
                rl.close();
            });
        }

    });
}

main();