const { confirmInteger , getRemainderValue , confirmSameRemainder } = require('./Q2_module');

//確認輸入格式
test("空字串",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入數字";
    //Act
    const actualResult = confirmInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("非數字",() =>  {
    //Arrange
    const input = "你好";
    const expectedResult = "請勿輸入阿拉伯數字以外的內容";
    //Act
    const actualResult = confirmInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("小數",() =>  {
    //Arrange
    const input = "0.5";
    const expectedResult = "請勿輸入整數以外的內容";
    //Act
    const actualResult = confirmInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("整數",() =>  {
    //Arrange
    const input = "5";
    const expectedResult = "integer";
    //Act
    const actualResult = confirmInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

//取得除以3的餘數
test("除以3的餘數",() =>  {
    //Arrange
    const input = "10";
    const expectedResult = 1;
    //Act
    const actualResult = getRemainderValue(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

//兩數餘數相同
test("除以3的餘數",() =>  {
    //Arrange
    const firstInput = "10";
    const secondInput = "13"
    const expectedResult = "餘數相同";
    //Act
    const actualResult = confirmSameRemainder(firstInput,secondInput);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

//兩數餘數不同

test("除以3的餘數",() =>  {
    //Arrange
    const firstInput = "15";
    const secondInput = "13"
    const expectedResult = "餘數不相同";
    //Act
    const actualResult = confirmSameRemainder(firstInput,secondInput);
    //Assert
    expect(actualResult).toBe(expectedResult);
});