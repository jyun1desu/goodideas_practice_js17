const {
    putItemOnCar,
    resultMessage
} = require('./Q15_modules')
const mockRandomForEach = require('jest-mock-random').mockRandomForEach;

describe('放啞鈴', () => {
    mockRandomForEach(0)

    test("全部只放啞鈴", () => {
        //Arrange
        // global.Math.random = jest.fn(x => 0);

        const item = [{
                "name": "啞鈴",
                "dumbbells": 0,
                "weight": 30,
                "amount": 0
            },
            {
                "name": "單槓",
                "horizonta_bar": 1,
                "weight": 20,
                "amount": 0
            },
            {
                "name": "跑步機",
                "treadmill": 2,
                "weight": 50,
                "amount": 0
            },
        ];
        const limit = 1000;
        const expectedResult = "啞鈴33個，單槓0個，跑步機0個，總重990公斤";
        //Act
        const amountItem = putItemOnCar(limit, item)
        const message = resultMessage(amountItem, item)
    
        // const actualResult = result(limit, item);
        //Assert
        expect(message).toBe(expectedResult);
    });

});

describe('放啞鈴', () => {
    mockRandomForEach(1/3)

    test("全部只放單槓", () => {
        //Arrange
        // global.Math.random = () => 1/3;
        // global.Math.random = jest.fn(x => 1/3);

        const item = [{
                "name": "啞鈴",
                "dumbbells": 0,
                "weight": 30,
                "amount": 0
            },
            {
                "name": "單槓",
                "horizonta_bar": 1,
                "weight": 20,
                "amount": 0
            },
            {
                "name": "跑步機",
                "treadmill": 2,
                "weight": 50,
                "amount": 0
            },
        ];
        const limit = 1000;
        const expectedResult = "啞鈴0個，單槓50個，跑步機0個，總重1000公斤";
        //Act
        const amountItem = putItemOnCar(limit, item)
        const message = resultMessage(amountItem, item)
        // const actualResult = result(limit, item);
        //Assert
        expect(message).toBe(expectedResult);
    });

});

describe('放啞鈴', () => {
    mockRandomForEach(2/3)

    test("全部只放跑步機", () => {
        //Arrange
        // global.Math.random = () => 2/3;
        // global.Math.random = jest.fn(x => 2 / 3);
        const item = [{
                "name": "啞鈴",
                "dumbbells": 0,
                "weight": 30,
                "amount": 0
            },
            {
                "name": "單槓",
                "horizonta_bar": 1,
                "weight": 20,
                "amount": 0
            },
            {
                "name": "跑步機",
                "treadmill": 2,
                "weight": 50,
                "amount": 0
            },
        ];
        const limit = 1000;
        const expectedResult = "啞鈴0個，單槓0個，跑步機20個，總重1000公斤";
        //Act
        const amountItem = putItemOnCar(limit, item)
        const message = resultMessage(amountItem, item)
        // const actualResult = result(limit, item);
        //Assert
        expect(message).toBe(expectedResult);
    })
});