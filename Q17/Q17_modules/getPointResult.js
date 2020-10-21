const votes = [51, 5, 23, 21]

// const getEachScore = require('./getEachScore')
// const getCandicateArray = require('./getCandicateArray')

// function transposeArray(array) {
//     let arr = [];
//     for (i = 0; i < array[0].length; i++) {
//         arr[i] = []
//         for (j = 0; j < array.length; j++) {
//             arr[i][j] = array[j][i]
//         }
//     }
//     return arr
// }


// function dosomething(transArray, array,i) {
//     transArray.forEach((item,j) => {
//         array[i][j] = item.indexOf(i + 1) + 1;
//     })
//     // for (j = 0; j < transArray.length; j++) {
//     //     array[i][j] = transArray[j].indexOf(i + 1) + 1;
//     // }
// }

// call by sharing!
// function jyunYiFormatArray(originalArray) {
//     let arr = originalArray.slice().fill([])
//     for (i = 0; i < originalArray.length; i++) {
//         for (j = 0; j < originalArray[0].length; j++) {
//             arr[originalArray[i][j] - 1][j] = i + 1
//         }
//     }
//     return arr
// }

function jyunYiFormatArray(originalArray) {
    let arr = originalArray.map(x => [])
    for (i = 0; i < originalArray.length; i++) {
        for (j = 0; j < originalArray[0].length; j++) {
            arr[originalArray[i][j] - 1][j] = i + 1
        }
    }
    return arr
}

// function jyunYiFormatArray(transArray) {
//     return transArray.reduce((resultArray, item, i) => {
//         resultArray[i] = transArray.reduce((result, item, j) => {
//             result[j] = item.indexOf(i + 1) + 1;
//             return result;
//         }, []);
//         return resultArray;
//     }, []);
// }


function getEachSum(candicateIndex, votesArray, rankArray) {
    const weightedScore = [4, 3, 2, 1]

    let candicateScoreArray = jyunYiFormatArray(rankArray)
        .map(ordersOfAmountVote => ordersOfAmountVote.map(order => weightedScore[order - 1]));

    return votesArray.reduce((score, voteAmount, voteIndex) => {
        score += voteAmount * candicateScoreArray[candicateIndex][voteIndex];
        return score;
    }, 0)

}


module.exports = function getAllSumArray(votesArray, rankArray) {
    let socreSumArray = [];
    for (let i = 0; i < rankArray.length; i++) {
        socreSumArray.push(getEachSum(i, votesArray, rankArray))
    }
    return socreSumArray
}