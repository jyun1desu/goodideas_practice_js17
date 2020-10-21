const caculateFee = require('./Q11_modules/caculateFee');
const confirmPositiveInteger = require('./Q11_modules/confirmPositiveInteger');

test("空字串:顯示'尚未輸入數字'",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入數字";
    //Act
    const actualResult  = confirmPositiveInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("非數字:顯示'請勿輸入阿拉伯數字以外的內容'",() =>  {
    //Arrange
    const input = "你好";
    const expectedResult = "請勿輸入阿拉伯數字以外的內容";
    //Act
    const actualResult  = confirmPositiveInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("0:顯示'請輸入正整數'",() =>  {
    //Arrange
    const input = "0";
    const expectedResult = "請輸入正整數";
    //Act
    const actualResult  = confirmPositiveInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("負數:顯示'請勿輸入負數'",() =>  {
    //Arrange
    const input = "-5";
    const expectedResult = "請勿輸入負數，請輸入正整數";
    //Act
    const actualResult  = confirmPositiveInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("小數:顯示'請勿輸入整數以外的內容'",() =>  {
    //Arrange
    const input = "0.5";
    const expectedResult = "請勿輸入正整數以外的內容";
    //Act
    const actualResult  = confirmPositiveInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("正整數:顯示'positiveInteger'",() =>  {
    //Arrange
    const input = "5";
    const expectedResult = "positiveInteger";
    //Act
    const actualResult  = confirmPositiveInteger(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("算出健身房費用：'期數10，費用為4495元'",() =>  {
    //Arrange
    const input = "10";
    const expectedResult = 4495;
    //Act
    let actualResult = caculateFee(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});
