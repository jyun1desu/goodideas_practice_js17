const getEachSum = require('./getEachSum')

module.exports = function getPointResult(candicateAmount, votesArray, rankArray){
    let result = "";
    let socreSumArray = [null];
    for(let i=1;i<=candicateAmount;i++){
        socreSumArray.push(getEachSum(i, votesArray, rankArray))
        result += `${i}號候選人為${getEachSum(i, votesArray, rankArray)}分，`
    }
    return {socreSumArray,result}
}