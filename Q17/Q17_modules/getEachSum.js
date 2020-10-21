// const getEachScore = require('./getEachScore')
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

function getEachSum2(votesArray, candicateScoreArray) {
    let score = 0;
    for (i = 0; i < votesArray.length; i++) {
        score += votesArray[i] * candicateScoreArray[i];
    }
    return score;
}

module.exports = function getEachSum(candicateNumber, votesArray, rankArray) {
    // let array = getCandicateArray(rankArray)
    const transArray = transposeArray(rankArray)
    let array1 = candicateRankArray(transArray, candicateRankArray);
    const weightedScore = [4, 3, 2, 1]
    let candicateScoreArray1 = getEachScore2(rankArray, array1, weightedScore);
    let candicateScoreArray = candicateScoreArray1[candicateNumber]

    // let candicateScoreArray = getEachScore(rankArray)[candicateNumber]
    
    return getEachSum2(votesArray, candicateScoreArray);
}
