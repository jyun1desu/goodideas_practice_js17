const informTicketPrice = require('./Q3_modules/informTicketPrice');

test("空字串",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入數字";
    try {
        //Act
        informTicketPrice(input);
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
        informTicketPrice(input);
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
        informTicketPrice(input);
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
        informTicketPrice(input);
    } catch (actualResult) {
        //Assert
        expect(actualResult).toBe(expectedResult);
    }
});

test("符合購票資格",() =>  {
    //Arrange
    const input = "5";
    const expectedResult = "符合優惠資格，票價為200元";

    //Act
    const result = informTicketPrice(input)
    //Assert
    expect(result).toBe(expectedResult)
});

test("不符合購票資格",() =>  {
    //Arrange
    const input = "15";
    const expectedResult = "不符合優惠資格，票價為原價400元";

    //Act
    const result = informTicketPrice(input)
    //Assert
    expect(result).toBe(expectedResult)
});