const { getRemainderValue } = require('./getRemainderValue');

//確認餘數是否相同
function confirmSameRemainder(firstStrInput,secondStrInput) {
    let firstRemainderValue = getRemainderValue(firstStrInput);
    let secondRemainderValue = getRemainderValue(secondStrInput);
    //餘數相同
    if(firstRemainderValue === secondRemainderValue) {
        return "兩者餘數相同"
    }
    //餘數不相同
    else {
        return "兩者餘數不相同"
    }
}

module.exports = { confirmSameRemainder };