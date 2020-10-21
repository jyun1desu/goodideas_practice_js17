const getRandom = require('./getRandom')

// enum
// const itemType = {
//     "dumbbells": 0,
//     "horizonta_bar": 1,
//     "treadmill": 2,
// }


module.exports = function putItemOnCar(limit, items /* output */) {
    // const amountItems = [0, 0, 0];
    const amountItems = {
        data: [0, 0, 0],
        totalweight: function (items) {
            return this.data.reduce((result, current_amount, indexItem) => {
                result += items[indexItem]["weight"] * current_amount
                return result
            }, 0)
        }
    }

    let totalweight = 0
    let nextItem = getRandom(items.length);
    do {
        const currentItem = nextItem;
        // switch (currentItem) {
        //     case itemType["dumbbells"]:
        //         item[itemType["dumbbells"]]["amount"]++
        //         break;
        //     case itemType["horizonta_bar"]:
        //         item[itemType["horizonta_bar"]]["amount"]++
        //         break;
        //     case itemType["treadmill"]:
        //         item[itemType["treadmill"]]["amount"]++
        //         break;
        // }
        // items[currentItem]["amount"]++
        amountItems.data[currentItem]++
        // calc total weight
        totalweight = amountItems.totalweight(items);
        // totalweight = items.reduce((result, cur, indexItem) => {
        //     result += cur["weight"] * amountItems[indexItem];
        //     return result
        // }, 0)

        nextItem = getRandom(items.length);
        nextWeight = totalweight + items[nextItem]["weight"];

    } while (nextWeight <= limit)
    return amountItems
}