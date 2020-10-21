// const getCandicateArray = require('./getCandicateArray')

function transposeArray(array) {
    let arr = [];
    for (i = 0; i < array[0].length; i++) {
        arr[i] = []
        for (j = 0; j < array.length; j++) {
            arr[i][j] = array[j][i]
        }
    }
    return arr
}


function candicateRankArray(transArray, candicateRankArray) {
    for (i = 0; i < transArray.length; i++) {
        candicateRankArray[i] = [];
        for (j = 0; j < transArray.length; j++) {
            candicateRankArray[i][j] = transArray[j].indexOf(i + 1) + 1;
        }
    }
    return candicateRankArray;
}

function getEachScore2(rankArray, array, weightedScore) {
    let candicatesScoreArray = [];
    for (let i = 0; i < rankArray.length; i++) {
        candicatesScoreArray.push(array[i].map(x => weightedScore[x - 1]));
    }
    return candicatesScoreArray;
}

module.exports = function getEachScore(rankArray) {
    // let array = getCandicateArray(rankArray)
    const transArray = transposeArray(array)
    let array = candicateRankArray(transArray, candicateRankArray);
    const weightedScore = [4, 3, 2, 1]
    return getEachScore2(rankArray, array, weightedScore);
};