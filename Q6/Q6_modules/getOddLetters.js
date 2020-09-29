//名字轉換陣列
function getNameLetterArray(itemInput){
    let getEachLetterReg = /./g
    return itemInput.match(getEachLetterReg)
}

//名字(已經轉換陣列) 取單數字母
function nameOddLetters(arrName){
    for (var i = 0; i < arrName.length; i++) {
        arrName.splice(i + 1, 1);
    }
    const result = arrName.join('')
    return result
}

////合併
function caculationResult(firstInput,secondInput){
    const firstNameLetters = getNameLetterArray(firstInput)
    const thirdNameLetters = getNameLetterArray(secondInput)
    const firstNameResult = nameOddLetters(firstNameLetters);
    const thirdNameResult = nameOddLetters(thirdNameLetters);
    const finalResult = `${firstNameResult},${thirdNameResult}`

    return finalResult
}

module.exports = caculationResult