const confirmPositiveInteger = require('./confirmPostitveInteger');
const caculationFormula = require('./caculationFormula');

//確認格式後，將算式與解答合併
module.exports = function formula(strInput) {
    let confirmStatus = confirmPositiveInteger(strInput);
        if (confirmStatus !== 'positiveInteger') {
            throw confirmStatus
        }
        const { formula, sum } = caculationFormula(strInput)
        let answer = `${formula}=${sum}`
        return answer
}