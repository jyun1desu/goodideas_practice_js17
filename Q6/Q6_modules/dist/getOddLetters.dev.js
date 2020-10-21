"use strict";

//名字轉換陣列
function getNameLetterArray(itemInput) {
  var getEachLetterReg = /./g;
  return itemInput.match(getEachLetterReg);
} //名字(已經轉換陣列) 取單數字母


function nameOddLetters(arrName) {
  for (var i = 0; i < arrName.length; i++) {
    arrName.splice(i + 1, 1);
  }

  var result = arrName.join('');
  return result;
} ////合併


function caculationResult(firstInput, secondInput) {
  var firstNameLetters = getNameLetterArray(firstInput);
  var thirdNameLetters = getNameLetterArray(secondInput);
  var firstNameResult = nameOddLetters(firstNameLetters);
  var thirdNameResult = nameOddLetters(thirdNameLetters);
  var finalResult = "".concat(firstNameResult, ",").concat(thirdNameResult);
  return finalResult;
}

module.exports = caculationResult;