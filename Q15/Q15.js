// 有一輛搬運車，限重1噸，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg
// 在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量
// 以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量
const putItemOnCar = require('./Q15_modules/putItemOnCar')

const item = [{
        "name": "啞鈴",
        "dumbbells": 0,
        "weight": 30,
        "amount": 0
    },
    {
        "name": "單槓",
        "horizonta_bar": 1,
        "weight": 20,
        "amount": 0
    },
    {
        "name": "跑步機",
        "treadmill": 2,
        "weight": 50,
        "amount": 0
    },
]

function result(item, limit) {
    let carStatus = putItemOnCar(item, limit)
    let totalweight = carStatus.totalweight
    let itemArray = carStatus.item
    let result = ""
    for (i = 0; i < itemArray.length; i++) {
        result += `${itemArray[i]["name"]}${itemArray[i]["amount"]}個，`
    }
    result += `總重${totalweight}公斤`
    return result
}

module.exports = result