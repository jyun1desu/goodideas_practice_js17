// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

const readline = require('readline');
const playMovoie = require('./Q1_module/playMovoie');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
    rl.question('請輸入該場電影售票張數', (ticketCount) => {
        try {
            let availibleMessage = playMovoie(ticketCount);
            console.log(`${availibleMessage}`);
            
            rl.close();
        } catch (error) {
            console.log('error', error)
            main();
        }
    });
}

main();