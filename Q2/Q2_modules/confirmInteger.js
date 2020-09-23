//確認輸入格式：整數
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
    return 'integer';
}

module.exports = { confirmInteger };