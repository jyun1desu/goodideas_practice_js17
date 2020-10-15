const getPointResult = require('./getPointResult')

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

module.exports = function getElectionResult(candicateAmount, votesArray, rankArray){
    let socreArray = getPointResult(candicateAmount, votesArray, rankArray)
    let winner = socreArray.indexOf(Math.max(...socreArray))+1
    let string = ""
    for(i=0;i<socreArray.length;i++){
        string += `${i+1}號候選人為${socreArray[i]}分，`
    }
    return `${string}當選者為${winner}號候選人。`
}

