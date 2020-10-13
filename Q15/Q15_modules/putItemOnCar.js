const getRandom = require('./getRandom')

module.exports = function putItemOnCar(item, limit) {

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
        nextWeight = totalweight + item[nextItem]["weight"];

    } while (nextWeight < limit)
    return {totalweight,item}
}