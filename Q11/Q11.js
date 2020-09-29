//好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元
//請讓使用者自行輸入所需期數，並利用do while計算，印出總費用。

const readline = require('readline');
const caculateFee = require('./Q11_modules/caculateFee');
const confirmPositiveInteger = require('./Q11_modules/confirmPositiveInteger');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question('請輸入欲報名好想健身房期數，每期為500元，第一期有79折優惠，每五期享有200元折扣', (strInput) => {
        const isVaildInput = confirmPositiveInteger(strInput) === 'positiveInteger'
        if (!isVaildInput) {
            let errorMessage = confirmPositiveInteger(strInput);
            console.log(`${errorMessage}`);
            return main();
        }
        console.log(`報名${strInput}期，費用共${caculateFee(strInput)}元`);
        rl.close();
    });
}

main();