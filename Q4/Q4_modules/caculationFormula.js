//算式
module.exports = function caculationFormula(strInput){
    let formula = "1";
    let numInput = Number(strInput)
    let sum = 1;
    for(var i = 2; i < numInput+1 ; i++) {
        const isOdd = i % 2;

        const sign = isOdd ? "-" : "+";
        const negative = isOdd ? -1 : 1;

        formula += sign + i;   
        sum += negative * i;
    }

    return {
        formula,
        sum
    }
}