// 找出10~20的質數，並列出前述各質數在1~100的倍數

//找出質數
function isPrime(numInput) {
    for (let i = 2; i < numInput; i++) {
        if (numInput % i === 0) {
            return false
        }
    }
    return true
}
//列出num1~num2之間的質數
let primeArray = []
function primeBetween(minNum, MaxNum) {
    for (let i = minNum; i <= MaxNum; i++) {
        if (isPrime(i)) {
            primeArray.push(i)
        }
    }
    return primeArray
}
primeBetween(10, 20);
//列出num在1~100的倍數
function multipleUnder100(numInput) {
    let multipleArray = []
    for (let i = 1; i < 101; i++) {
        if (i % numInput === 0) {
            multipleArray.push(i)
        }
    }
    return multipleArray
}
//結果
function result() {
    const resultArray = [];
    for (let i = 0; i < primeArray.length; i++) {
        resultArray[i] = `${primeArray[i]}，${multipleUnder100(primeArray[i])}`
    }
    return resultArray
}
//
const printResult = `10-20內的質數為${primeArray.join()}，100以下的倍數如下：\n${result().join("\n")}`
console.log(printResult)