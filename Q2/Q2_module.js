//確認輸入格式
function confirmInteger(strInput){
    //空字串
    const isEmptyString = !strInput.trim().length
    if(isEmptyString){
        return '尚未輸入數字';
    } 
    //非數字
    const numInput = Number(strInput)
    const isNumber = !Number.isNaN(numInput)
    if(!isNumber) {
        return '請勿輸入阿拉伯數字以外的內容';
    }
    //小數
    if(numInput % 1 !== 0) {
        return '請勿輸入整數以外的內容';
    }
    //整數
    // else {
    // }
    return 'integer';
}

//取除以3的餘數
function getRemainderValue(strInput) {
    return strInput % 3
}

//確認餘數是否相同
function confirmSameRemainder(firstStrInput,secondStrInput) {
    let firstRemainderValue = getRemainderValue(firstStrInput);
    let secondRemainderValue = getRemainderValue(secondStrInput);
    //餘數相同
    if(firstRemainderValue === secondRemainderValue) {
        return "餘數相同"
    }
    //餘數不相同
    else {
        return "餘數不相同"
    }
}

module.exports = { confirmInteger , confirmSameRemainder , getRemainderValue };