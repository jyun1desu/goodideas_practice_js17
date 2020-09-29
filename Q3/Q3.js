//好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價
//試用「關係運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢

const readline = require('readline');
const informTicketPrice = require('./Q3_modules/informTicketPrice');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
    rl.question('請輸入年齡以獲得票價資訊', (customerAge) => {
        try {
            let ticketPriceMessage = informTicketPrice(customerAge);
            console.log(`${ticketPriceMessage}`);
            
            rl.close();
        } catch (error) {
            console.log(error)
            main();
        }
    });
}
main();