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


function transposeArray(array) {
    let arr = [];
    for (i = 0; i < array.length; i++) {
        arr[i] = []
        for (j = 0; j < array[i].length; j++) {
            arr[i][j] = array[j][i]
        }
    }
    return arr
}

module.exports = function candicateRankArray(array) {
    const transArray = transposeArray(array)
    let candicateRankArray = []
    for (i = 0; i < transArray.length; i++) {
        candicateRankArray[i] = [];
        for (j = 0; j < transArray.length; j++) {
            candicateRankArray[i][j] = transArray[j].indexOf(i + 1) + 1
        }
    }
    return candicateRankArray
}