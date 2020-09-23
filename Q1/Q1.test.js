const playMovoie = require('./Q1_module/playMovoie');

test("空字串",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入數字";
    try {
        //Act
        playMovoie(input);
    } catch (actualResult) {
        //Assert
        expect(actualResult).toBe(expectedResult);
    }
});

test("非數字",() =>  {
    //Arrange
    const input = "你好";
    const expectedResult = "請勿輸入阿拉伯數字以外的內容";
    try {
        //Act
        playMovoie(input);
    } catch (actualResult) {
        //Assert
        expect(actualResult).toBe(expectedResult);
    }
});

test("負數",() =>  {
    //Arrange
    const input = "-5";
    const expectedResult = "請勿輸入負數";
    try {
        //Act
        playMovoie(input);
    } catch (actualResult) {
        //Assert
        expect(actualResult).toBe(expectedResult);
    }
});

test("小數",() =>  {
    //Arrange
    const input = "0.5";
    const expectedResult = "請勿輸入整數以外的內容";
    try {
        //Act
        playMovoie(input);
    } catch (actualResult) {
        //Assert
        expect(actualResult).toBe(expectedResult);
    }
});

test("電影正常播映",() =>  {
    //Arrange
    const input = "5";
    const expectedResult = "今日售出5張電影票，電影正常播映";

    //Act
    const result = playMovoie(input)
    //Assert
    expect(result).toBe(expectedResult)
});

test("電影不播映",() =>  {
    //Arrange
    const input = "0";
    const expectedResult = "今日未售出電影票，電影將不放映";
    //Act
    const result = playMovoie(input)
    //Assert
    expect(result).toMatch(expectedResult)
});