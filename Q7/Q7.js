//印出下圖，並轉90度

//   ** ** 
//  ******* 
// *********
// *********
//  *******
//   *****
//    ***
//     *

const readline = require('readline');
const { printHeart , printRotatedHeart } = require('./Q7_modules/printHeart')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function main() {
      rl.question('輸入任意鍵印出愛心', () => {
              console.log(`${printHeart}`);
              return secondstep();
  
          function secondstep() {
              rl.question('輸入任意鍵將愛心旋轉90度', () => {
                
                  console.log(`${printRotatedHeart}`);
                  rl.close();
              });
          }
  
      });
  }
  
  main();