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

const candicatePoint = [null,0,0,0,0]
const votes = [51,5,23,21]
const candicateScoresArray=[
    [null,null,null,null],
    [4,1,1,1],
    [2,3,4,2],
    [3,4,3,3],
    [1,2,2,4],
]

//候選人順位轉換分數加總
function getPointSum(candicateNumber){
    for(i=0;i<4;i++){
        candicatePoint[candicateNumber]+=votes[i]*candicateScoresArray[candicateNumber][i]
    }
    return candicatePoint[candicateNumber]
}

let result = `一號候選人得票為${getPointSum(1)}張\n二號候選人得票為${getPointSum(2)}張\n三號候選人得票為${getPointSum(3)}張\n四號候選人得票為${getPointSum(4)}張`
console.log(result)