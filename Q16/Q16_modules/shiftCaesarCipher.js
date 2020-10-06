// 凱撒密碼：輸入strInput,字母向後平移num單位
function shiftCaesarCipher(strInput, num) {
    let shiftResult = "";
    for (i = 0; i < strInput.length; i++) {
        let character = strInput.charAt(i)
        let characterCode = character.charCodeAt(0)
        //大寫:unicode在65~90間
        let uppercase = characterCode >= 65 && characterCode <= 90
        if (uppercase) {
            let shiftCharacter = String.fromCharCode((characterCode + num - 65) % 26 + 65)
            shiftResult += shiftCharacter
        }
        //小寫:unicode在97~122間
        let lowercase = characterCode >= 97 && characterCode <= 122
        if (lowercase) {
            let shiftcharacter = String.fromCharCode((characterCode + num - 97) % 26 + 97)
            shiftResult += shiftcharacter
        }
    }
    return shiftResult
}

module.exports = shiftCaesarCipher