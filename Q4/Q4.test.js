const formula = require('./Q4_modules/resultWithFormula');
const caculationResult = require('./Q4_modules/caculationResult');

test("空字串:尚未輸入數字",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入數字";
    expect(() => {
        formula(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("非數字:請勿輸入阿拉伯數字以外的內容",() =>  {
    //Arrange
    const input = "你好";
    const expectedResult = "請勿輸入阿拉伯數字以外的內容";
    expect(() => {
        formula(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("0:請輸入正整數",() =>  {
    //Arrange
    const input = "0";
    const expectedResult = "請輸入正整數";
    expect(() => {
        formula(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("負數:請勿輸入負數",() =>  {
    //Arrange
    const input = "-5";
    const expectedResult = "請勿輸入負數";
    expect(() => {
        formula(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("小數:請勿輸入正整數以外的內容",() =>  {
    //Arrange
    const input = "0.5";
    const expectedResult = "請勿輸入正整數以外的內容";
    expect(() => {
        formula(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("算出答案",() =>  {
    //Arrange
    const input = "3";
    const expectedResult = 0;
    //Act
    let actualResult = caculationResult(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("顯示算式跟答案",() =>  {
    //Arrange
    const input = "10";
    const expectedResult = "1+2-3+4-5+6-7+8-9+10=7";
    //Act
    let actualResult = formula(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});
