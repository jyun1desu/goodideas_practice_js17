const confirmVaildInput = require('./Q16_modules/confirmValidInput');
const shiftCaesarCipher = require('./Q16_modules/shiftCaesarCipher');

//輸入空字串
test("空字串：尚未輸入內容，請輸入5個英文字母",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入內容，請輸入5個英文字母";
    //Act
    const result = confirmVaildInput(input)
    //Assert
    expect(result).toMatch(expectedResult)
});

//其他錯誤狀況
test("錯誤內容：請輸入5個英文字母，請勿輸入其他內容",() =>  {
    //Arrange
    const input = "abc";
    const expectedResult = "請輸入5個英文字母，請勿輸入其他內容";
    //Act
    const result = confirmVaildInput(input)
    //Assert
    expect(result).toMatch(expectedResult)
});

//輸入正確
test("輸入正確：isValidInput",() =>  {
    //Arrange
    const input = "abcde";
    const expectedResult = "isValidInput";
    //Act
    const result = confirmVaildInput(input)
    //Assert
    expect(result).toMatch(expectedResult)
});

//字母向後平移
test("向後平移3個單位：abcYZ => defAB",() =>  {
    //Arrange
    const input = "abcYZ";
    const expectedResult = "defBC";
    //Act
    const result = shiftCaesarCipher(input,3)
    //Assert
    expect(result).toMatch(expectedResult)
});

