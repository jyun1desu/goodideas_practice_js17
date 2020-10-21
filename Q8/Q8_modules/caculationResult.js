function divi(numInput,counter=1){
    const decimalNum = Math.floor(numInput/3*100)/100 //無條件捨去到小數第二位
    const strInput = String(decimalNum.toFixed(2)) //確保整除的數字也有小數點
    const regex = /0$/ //字串最後一個字是零
    const resultMatch = regex.test(strInput)

    if(resultMatch){
        const answer = (numInput/3).toFixed(6)
        return `總共除了${counter}次，結果為${answer}，以下位數省略`
    }else{
        return divi(numInput/3,counter+1)
    }
}

module.exports = divi