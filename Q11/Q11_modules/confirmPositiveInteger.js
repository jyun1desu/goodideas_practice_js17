module.exports = function confirmPositiveInteger(strInput){
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
    //負數
    if(numInput < 0) {
        return '請勿輸入負數，請輸入正整數';
    }
    //0
    if(numInput === 0){
        return '請輸入正整數';
    }
    //小數
    if(numInput % 1 !== 0) {
        return '請勿輸入正整數以外的內容';
    }
    //正整數
    return 'positiveInteger';

}