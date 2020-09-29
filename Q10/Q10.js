//宣告一整數陣列 array = [3,50,0,13,2,4,11] 
//試寫一程式，印出陣列中所包含的質數以及其索引值

const array = new Array(3, 50, 0, 13, 2, 4, 11)
//(0,1不是質數,2是質數)
function isPrime(numInput) {
    if (numInput == 0 || numInput == 1) {
        return false
    }   
    if (numInput == 2){
        return true
    }
    return findPrime(numInput)
}
// 質數 除了1跟自己沒有其他數字整除自己
function findPrime(numInput) {
    for (let i = 2; i < numInput; i++) {
        if (numInput % i === 0) {
            return false
        }
        return true
    }
}

//建立新陣列，含有array[]中的質數
const primeArray = array.filter(isPrime);

//建立新陣列，為質數在array[]中的索引值
const primeIndexArray = [];
for(let i=0;i<primeArray.length;i++){
    primeIndexArray[i] = `array[${array.indexOf(primeArray[i])}]`
}

//合併兩個陣列
function result(){
    const resultArray = [];
    for(let i=0;i<primeArray.length;i++){
        resultArray[i] = primeArray[i] + " " + primeIndexArray[i]
    }
    return resultArray.join()
}

console.log(result())