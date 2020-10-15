const getCandicateArray = require('./getCandicateArray')

module.exports = function getEachScore(rankArray) {
    let array = getCandicateArray(rankArray)
    const weightedScore = [4, 3, 2, 1]
    let candicatesScoreArray = [];
    for (let i = 0; i < rankArray.length; i++) {
        candicatesScoreArray.push(array[i].map(x => weightedScore[x - 1]));
    }
    return candicatesScoreArray
};