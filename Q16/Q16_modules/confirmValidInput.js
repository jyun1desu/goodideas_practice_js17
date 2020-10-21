//只允許字串中出現5個英文字母
function confirmVaildInput(strInput){
    //空字串
    let isEmptyInput = !strInput.trim().length
    if(isEmptyInput) {
        return "尚未輸入內容，請輸入5個英文字母"
    }
    //其他錯誤狀況
    let reg = /^[A-Z]{5}$/i;
    let isValidInput = reg.test(strInput)
    if(!isValidInput) {
        return "請輸入5個英文字母，請勿輸入其他內容"
    }
    //正確格式
    return 'isValidInput'
}

module.exports = confirmVaildInput