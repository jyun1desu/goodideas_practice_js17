const resultWithFormula = require('./Q4_modules/conculationFormula');
const conculationFormula = require('./Q4_modules/conculationFormula');
const conculationResult = require('./Q4_modules/conculationResult');

test("空字串",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入數字";
    try {
        //Act
        resultWithFormula(input);
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
        resultWithFormula(input);
    } catch (actualResult) {
        //Assert
        expect(actualResult).toBe(expectedResult);
    }
});

test("0",() =>  {
    //Arrange
    const input = "0";
    const expectedResult = "請輸入正整數";
    try {
        //Act
        resultWithFormula(input);
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
        resultWithFormula(input);
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
        resultWithFormula(input);
    } catch (actualResult) {
        //Assert
        expect(actualResult).toBe(expectedResult);
    }
});

test("列出算式",() =>  {
    //Arrange
    const input = "10";
    const expectedResult = "1+2-3+4-5+6-7+8-9+10";
    //Act
    let actualResult = conculationFormula(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("算出答案",() =>  {
    //Arrange
    const input = "3";
    const expectedResult = 0;
    //Act
    let actualResult = conculationResult(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("顯示算式跟答案",() =>  {
    //Arrange
    const input = "10";
    const expectedResult = "1+2-3+4-5+6-7+8-9+10=7";
    //Act
    try {
        //Act
        resultWithFormula(input);
    } catch (actualResult) {
        //Assert
        expect(actualResult).toBe(expectedResult);
    }
});
