module.exports = function getEachScore(rankArray) {
    const weightedScore = [null, 4, 3, 2, 1]
    let candicatesScoreArray = [];
    for (let i = 0; i < rankArray.length; i++) {
        candicatesScoreArray.push(rankArray[i].map(x => weightedScore[x]));
    }
    return candicatesScoreArray
};