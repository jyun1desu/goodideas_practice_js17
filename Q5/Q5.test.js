const confirmAvailibleInput = require('./Q5_modules/confirmAvailibleInput');
const caculationResult = require('./Q5_modules/caculationResult');

test("空字串:尚未輸入數字",() =>  {
    //Arrange
    const input = "";
    const expectedResult = "尚未輸入數字";
    expect(() => {
        caculationResult(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("非數字:請勿輸入阿拉伯數字以外的內容",() =>  {
    //Arrange
    const input = "你好";
    const expectedResult = "請勿輸入阿拉伯數字以外的內容";
    expect(() => {
        caculationResult(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("小於4:請勿輸入小於4的數字",() =>  {
    //Arrange
    const input = "3";
    const expectedResult = "請勿輸入小於4的數字";
    expect(() => {
        caculationResult(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("小數:請勿輸入整數以外的內容",() =>  {
    //Arrange
    const input = "5.5";
    const expectedResult = "請勿輸入整數以外的內容";
    expect(() => {
        caculationResult(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("奇數:請輸入偶數",() =>  {
    //Arrange
    const input = "5";
    const expectedResult = "請輸入偶數";
    expect(() => {
        caculationResult(input); //Act
      }).toThrow(expectedResult); //Assert
});

test("正確的數字(不小於4的偶數):輸入8得到80",() =>  {
    //Arrange
    const input = "8";
    const expectedResult = 80;
    //Act
    const actualResult = caculationResult(input);
    //Assert
    expect(actualResult).toBe(expectedResult);
});
