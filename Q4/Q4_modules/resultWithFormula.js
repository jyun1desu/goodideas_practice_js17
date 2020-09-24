const confirmPositiveInteger = require('./confirmPostitveInteger');
const conculationResult = require('./conculationResult');
const conculationFormula = require('./conculationFormula');

//確認格式後，將算式與解答合併
module.exports = function resultWithFormula(strInput) {
    let confirmStatus = confirmPositiveInteger(strInput);
        if (confirmStatus !== 'positiveInteger') {
            throw confirmStatus
        }
        let answer = `${conculationFormula(strInput)}=${conculationResult(strInput)}`
        return answer
}