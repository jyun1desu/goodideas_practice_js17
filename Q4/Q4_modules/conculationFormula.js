//算式
module.exports = function conculationFormula(strInput){
    let formula = "1";
    for(var i = 2; i <= strInput ; i++) {
        if(i%2 === 0){
        formula = formula + '+' + i
    };
        if(i%2 !== 0){
        formula = formula + '-' + i   
    };
        }
    return formula
}