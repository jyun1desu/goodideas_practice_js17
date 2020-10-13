// 運用 Borda Count。算出下面的候選人分數。
//(第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)

// --------| 51票 | 5票 | 23票 | 21票 |
// -----------------------------------
// 第一順位  |  1  |  3  |  2  |  4  |
// -----------------------------
// 第二順位  |  3  |  2  |  3  |  3  |
// -----------------------------
// 第三順位  |  2  |  4  |  4  |  2  |
// -----------------------------
// 第四順位  |  4  |  1  |  1  |  1  |
// -----------------------------------

// 一號候選人 = 51*4 + 5*1 + 23*1 + 21*1
// 二號候選人 = 51*2 + 5*3 + 23*4 + 21*2
// 三號候選人 = 51*3 + 5*4 + 23*3 + 21*3
// 四號候選人 = 51*1 + 5*2 + 23*2 + 21*4

const getPointResult = require('./Q17_modules/getPointResult')

const votes = [51, 5, 23, 21]
const candicatesRankArray = [
    [null, null, null, null],
    [1, 4, 4, 4],
    [2, 3, 4, 2],
    [3, 4, 3, 3],
    [1, 2, 2, 4],
]

module.exports = function getElectionResult(candicateAmount, votesArray, rankArray){
    let scoreResult = getPointResult(candicateAmount, votesArray, rankArray).result
    let socreArray = getPointResult(candicateAmount, votesArray, rankArray).socreSumArray
    let winner = socreArray.indexOf(Math.max(...socreArray))
    return `${scoreResult}當選者為${winner}號候選人。`
}