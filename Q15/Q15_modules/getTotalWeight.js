const getRandom = require('./getRandom')

module.exports = function getTotalWeight(){
    // enum
    const item = {
        "dumbbells": 0,
        "horizonta_bar": 1,
        "treadmill": 2,
    }

    let totalweight = 0
    let equipment = [0,0,0];
    const weight = [30, 20, 50];
    let nextItem = getRandom(3);
    do {
        const currentItem = nextItem;
        switch(currentItem) {

        case item["dumbbells"]:
            // totalweight += 30
            equipment[item["dumbbells"]]++
            break;
        case item["horizonta_bar"]:
            // totalweight += 20
            equipment[item["horizonta_bar"]]++
            break;
        case item["treadmill"]:
            // totalweight += 50
            equipment[item["treadmill"]]++
            break;
        }
        // calc total weitht
        totalweight = equipment.reduce((result, countItem, index) => {
            result += countItem * weight[index];
            return result
        }, 0)
        // console.log(totalweight)

        nextItem = getRandom(3);
        // totalweight + weight[nextItem] 

    } while (totalweight + weight[nextItem] <= 1000);
    return {equipment,totalweight}
}


