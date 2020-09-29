const confirmVaildInput  = require('./Q6_modules/confirmVaildInput');
const caculationResult = require('./Q6_modules/getOddLetters');

//確認輸入格式
test("空字串",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入內容，請輸入英文字母(大小寫皆可)";
    //Act
    const actualResult = confirmVaildInput(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("其他非英文字母",() =>  {
    //Arrange
    const input = "123abc";
    const expectedResult = "請輸入英文字母(大小寫皆可)，請勿輸入其他內容";
    //Act
    const actualResult = confirmVaildInput(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("正確格式",() =>  {
    //Arrange
    const input = "goodideas";
    const expectedResult = "isValidInput";
    //Act
    const actualResult = confirmVaildInput(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

//輸入兩個名字輸出單數字母
test("最後輸出的答案",() =>  {
    //Arrange
    const firstInput = "apple";
    const secondInput = "banana"
    const expectedResult = "ape,bnn"
    //Act
    const actualResult = caculationResult(firstInput,secondInput);
    //Assert
    expect(actualResult).toBe(expectedResult);
});
