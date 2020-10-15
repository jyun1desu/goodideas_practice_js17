const resultMessage = require('./Q17_modules/resultMessage')

test("題目情況", () => {
    //Arrange
    const candicateAmount = 4;
    const originalArray = [
        [1, 3, 2, 4],
        [3, 2, 3, 3],
        [2, 4, 4, 2],
        [4, 1, 1, 1],
    ]
    const votes = [51, 5, 23, 21]
    const expectedResult = "1號候選人為253分，2號候選人為251分，3號候選人為305分，4號候選人為191分，當選者為3號候選人。";
    //Act
    const actualResult = resultMessage(candicateAmount, votes, originalArray, );
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("候選人1號在每一張票皆為第一順位，2號皆為第二順位，以此類推", () => {
    //Arrange
    const candicateAmount = 4;
    const votes = [51, 5, 23, 21]
    const originalArray = [
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3],
        [4, 4, 4, 4],
    ]
    const expectedResult = "1號候選人為400分，2號候選人為300分，3號候選人為200分，4號候選人為100分，當選者為1號候選人。";
    //Act
    const actualResult = resultMessage(candicateAmount, votes, originalArray, );
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("候選人1號在每一張票皆為第四順位，2號皆為第三順位，以此類推", () => {
    //Arrange
    const candicateAmount = 4;
    const votes = [51, 5, 23, 21]
    const originalArray = [
        [4, 4, 4, 4],
        [3, 3, 3, 3],
        [2, 2, 2, 2],
        [1, 1, 1, 1],
    ]
    const expectedResult = "1號候選人為100分，2號候選人為200分，3號候選人為300分，4號候選人為400分，當選者為4號候選人。";
    //Act
    const actualResult = resultMessage(candicateAmount, votes, originalArray, );
    //Assert
    expect(actualResult).toBe(expectedResult);
});

test("票匭只有四張票，分別投給不同的第一順位", () => {
    //Arrange
    const candicateAmount = 4;
    const votes = [1, 1, 1, 1]
    const originalArray = [
        [1, 3, 4, 2],
        [3, 1, 3, 3],
        [2, 4, 1, 4],
        [4, 2, 2, 1],
    ]
    const expectedResult = "1號候選人為10分，2號候選人為8分，3號候選人為13分，4號候選人為9分，當選者為3號候選人。";
    //Act
    const actualResult = resultMessage(candicateAmount, votes, originalArray);
    //Assert
    expect(actualResult).toBe(expectedResult);
});