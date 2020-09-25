//宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中
//並輸出第一個和第三個名字的單數個字母。

const readline = require('readline');
const confirmVaildInput  = require('./Q6_modules/confirmVaildInput');
const caculationResult = require('./Q6_modules/getOddLetters');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
    rl.question('請輸入四個英文名字，現在是第一個：', (firstStrInput) => {
        let confirmValidInput = confirmVaildInput(firstStrInput);
        if(confirmValidInput!=='isValidInput'){
            console.log(`${confirmValidInput}`);
            return main();
        }
        const name = [];
        name.push(firstStrInput);
        return secondQuestion();

        function secondQuestion() {
            rl.question('第二個：', (secondStrInput) => {
                let confirmValidInput = confirmVaildInput(secondStrInput);
                if(confirmValidInput!=='isValidInput'){
                    console.log(`${confirmValidInput}`);
                    return secondQuestion();
                }
                name.push(secondStrInput);
                return thirdQuestion();

                function thirdQuestion() {
                    rl.question('第三個：', (thirdStrInput) => {
                        let confirmValidInput = confirmVaildInput(thirdStrInput);
                        if(confirmValidInput!=='isValidInput'){
                            console.log(`${confirmValidInput}`);
                            return thirdQuestion();
                        }
                        
                        name.push(thirdStrInput);
                        return lastQuestion();
        
                        function lastQuestion() {
                            rl.question('第四個：', (lastStrInput) => {
                                let confirmValidInput = confirmVaildInput(lastStrInput);
                                if(confirmValidInput!=='isValidInput'){
                                    console.log(`${confirmValidInput}`);
                                    return lastQuestion();
                                }
                                name.push(lastStrInput);
                                const result = caculationResult(name[0],name[2])
                                console.log(result);
                                rl.close();
                            });
                        }
                    });
                }
            });
        }
    });
}

main();