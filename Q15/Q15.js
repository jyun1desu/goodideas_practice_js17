// 有一輛搬運車，限重1噸，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg
// 在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量
// 以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量


// const getRandom = require('./Q15_modules/getRandom')

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

function getRandom(input) {
    return Math.floor(Math.random() * (input + 1))
}

function putItemOnCar(item, limit) {

    let totalweight = 0
    let itemOnCar = []
    let nextItem = getRandom(item.length);
    do {
        const currentItem = nextItem;
        switch (currentItem) {

            case item[0]["dumbbells"]:
                item[0]["amount"]++
                itemOnCar.push(0)
                break;
            case item[1]["horizonta_bar"]:
                item[1]["amount"]++
                itemOnCar.push(1)
                break;
            case item[2]["treadmill"]:
                item[2]["amount"]++
                itemOnCar.push(2)
                break;
        }
        // calc total weight
        totalweight = item.reduce((result, cur, index) => {
            result += item[index]["weight"] * item[index]["amount"];
            return result
        }, 0)

        nextItem = getRandom(3);
        nextWeight = totalweight + item[nextItem];

    } while (totalweight <= limit)
    return {
        item,
        totalweight,
        itemsOnCar: itemOnCar
    }
}

function getFinal(itemArray, limit) {
    let carStatus = putItemOnCar(itemArray, limit);
    if (carStatus.totalweight > 1000) {
        const lastItem = carStatus.itemsOnCar[carStatus.itemsOnCar.length - 1];
        let totalweight = carStatus.totalweight - itemArray[lastItem]["weight"];
        itemArray[lastItem]["amount"] - 1;
        return {
            totalweight,
            itemArray
        }
    }
    return {
        totalweight,
        itemArray
    }
}

let element = getFinal(item, 1000)
let result = `${element.itemArray[0]["name"]}${element.itemArray[0]["amount"]}個\n${element.itemArray[1]["name"]}${element.itemArray[1]["amount"]}個\n${element.itemArray[2]["name"]}${element.itemArray[2]["amount"]}台\n總重${element.totalweight}公斤`

console.log(result)