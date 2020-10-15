const getEachSum = require('./getEachSum')

const originalArray = [
    [1, 3, 2, 4],
    [3, 2, 3, 3],
    [2, 4, 4, 2],
    [4, 1, 1, 1],
]
const votes = [51, 5, 23, 21]

module.exports = function getPointResult(candicateAmount, votesArray, rankArray) {
    let result = "";
    let socreSumArray = [];
    for (let i = 0; i < candicateAmount; i++) {
        socreSumArray.push(getEachSum(i, votesArray, rankArray))
        result += `${i+1}號候選人為${getEachSum(i, votesArray, rankArray)}分，`
    }
    return socreSumArray
}