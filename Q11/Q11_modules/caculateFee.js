module.exports = function caculateFee(strInput) {
    let monthlyFee = 500;
    let newMemberDiscountPesentage = 0.79;
    let longTermDiscount = -200;
    let totalFee = 0;
    let i = 0;
    do {
        i = i + 1;
        if (i === 1) {
            totalFee = monthlyFee * newMemberDiscountPesentage;
        } else if (i % 5 === 0) {
            totalFee = totalFee + monthlyFee + longTermDiscount;
        } else {
            totalFee = totalFee + monthlyFee;
        }
    } while (i < strInput);
    return totalFee
}