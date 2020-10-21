//確認輸入格式
function confirmAvailibleInput(strInput){
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
    //小於4
    if(numInput < 4) {
        return '請勿輸入小於4的數字';
    }
    //小數
    if(numInput % 1 !== 0) {
        return '請勿輸入整數以外的內容';
    }
    //奇數
    if(numInput % 2 !== 0) {
        return '請輸入偶數';
    } 
    //大於等於4的偶數
    return 'availibleInput';
}
module.exports = confirmAvailibleInput