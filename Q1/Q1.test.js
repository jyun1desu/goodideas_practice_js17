
const { confirmNatureNumber , movieAvailible } = require('./Q1_module');

test("空字串",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入數字";
    //Act
    const actualResult = confirmNatureNumber(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("非數字",() =>  {
    //Arrange
    const input = "你好";
    const expectedResult = "請勿輸入阿拉伯數字以外的內容";
    //Act
    const actualResult = confirmNatureNumber(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("負數",() =>  {
    //Arrange
    const input = "-5";
    const expectedResult = "請勿輸入負數";
    //Act
    const actualResult = confirmNatureNumber(input)
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("小數",() =>  {
    //Arrange
    const input = "0.5";
    const expectedResult = "請勿輸入整數以外的內容";
    //Act
    const actualResult = confirmNatureNumber(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("自然數",() =>  {
    //Arrange
    const input = "0";
    const expectedResult = "natureNumber";
    //Act
    const actualResult = confirmNatureNumber(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("電影正常播映",() =>  {
    //Arrange
    const input = "5";
    const expectedResult = "今日售出5張電影票，電影正常播映";

    //Act
    const result = movieAvailible(input)
    //Assert
    expect(result).toBe(expectedResult)
});

test("電影不播映",() =>  {
    //Arrange
    const input = "0";
    const expectedResult = "今日未售出電影票，電影將不放映";
    //Act
    const result = movieAvailible(input)
    //Assert
    expect(result).toMatch(expectedResult)
});