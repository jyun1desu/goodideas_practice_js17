//只允許字串中出現英文字母

function confirmVaildInput(strInput){
    //空字串
    let isEmptyInput = !strInput.trim().length
    if(isEmptyInput) {
        return "尚未輸入內容，請輸入英文字母(大小寫皆可)"
    }
    //其他非英文字母
    let reg = /^[A-Z]+$/i;
    let isValidInput = reg.test(strInput)
    if(!isValidInput) {
        return "請輸入英文字母(大小寫皆可)，請勿輸入其他內容"
    }
    //正確格式
    return 'isValidInput'
}

module.exports = confirmVaildInput;