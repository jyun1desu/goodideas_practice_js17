// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

const readline = require('readline');
const { confirmNatureNumber , movieAvailible } = require('./Q1_module');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
    rl.question('請輸入該場電影售票張數', (ticketCount) => {
        let confirmStatus = confirmNatureNumber(ticketCount);
        // const inputCorrect = isNatureNumber(strInput) === 'natureNumber'
        if (confirmStatus !== 'natureNumber') {
            console.log(`${confirmStatus}`);
            return main();
        }

        let availibleMessage = movieAvailible(ticketCount);
        console.log(`${availibleMessage}`);
        
        rl.close();
    });
}

main();

module.exports = { confirmNatureNumber , movieAvailible };

