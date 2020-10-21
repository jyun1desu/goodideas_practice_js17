//運算結果
module.exports = function caculationResult(strInput) {
    const n = strInput
    //輸入的偶數，若輸入奇數則是最大的偶數
    const maxEven = Math.floor(n/2)*2;
    //輸入的奇數，若輸入偶數則是最大的奇數
    const maxOdd = Math.ceil(n/2)*2-1;
    //運算
    const EvenSum = maxEven/2*(1+maxEven/2);
    const OddSum = (((maxOdd-1)*(maxOdd+3))/4);
    return 1+EvenSum-OddSum
}