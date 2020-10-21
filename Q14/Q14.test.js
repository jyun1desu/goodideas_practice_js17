const confirmNatureNumber = require('./Q14_modules/confirmNatureNumber');
const twofold = require('./Q14_modules/twoFold');

//確認輸入格式
test("空字串:尚未輸入數字",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入數字";
    //Act
    const actualResult = confirmNatureNumber(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("非數字:請勿輸入阿拉伯數字以外的內容",() =>  {
    //Arrange
    const input = "你好";
    const expectedResult = "請勿輸入阿拉伯數字以外的內容";
    //Act
    const actualResult = confirmNatureNumber(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("負數:請勿輸入負數",() =>  {
    //Arrange
    const input = "-1";
    const expectedResult = "請勿輸入負數";
    //Act
    const actualResult = confirmNatureNumber(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});


test("小數：請勿輸入整數以外的內容",() =>  {
    //Arrange
    const input = "0.5";
    const expectedResult = "請勿輸入整數以外的內容";
    //Act
    const actualResult = confirmNatureNumber(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("自然數：natureNumber",() =>  {
    //Arrange
    const input = "5";
    const expectedResult = "natureNumber";
    //Act
    const actualResult = confirmNatureNumber(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

//計算細菌數
test("計算細菌數，數量1過了40分鐘成長為4",() =>  {
    //Arrange
    const firstInput = "1";
    const secondInput = "40";
    const expectedResult = 4;
    //Act
    const actualResult = Math.floor(twofold(firstInput,secondInput));
    //Assert
    expect(actualResult).toBe(expectedResult);
});