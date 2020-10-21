// 有一輛搬運車，限重1噸，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg
// 在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量
// 以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量
const {
    putItemOnCar,
    resultMessage
} = require('./Q15_modules')

const items = [{
        "name": "啞鈴",
        "weight": 30,
    },
    {
        "name": "單槓",
        "weight": 20,
    },
    {
        "name": "跑步機",
        "weight": 50,
    },
]

function main() {
    const amountItem = putItemOnCar(1000, items)
    const message = resultMessage(amountItem, items)
    console.log(message)
}

main();

