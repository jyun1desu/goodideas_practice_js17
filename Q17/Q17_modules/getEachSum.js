const getEachScore = require('./getEachScore')

module.exports = function getEachSum(candicateNumber, votesArray, rankArray) {
    let candicateScoreArray = getEachScore(rankArray)[candicateNumber]
    let score = 0;
    for (i = 0; i < votesArray.length; i++) {
        score += votesArray[i] * candicateScoreArray[i]
    }
    return score
}