const confirmDiscountQualification = require('./confirmDiscountQualification');

module.exports = function conculateTicketPrice(strInput){
    let ticketPrice = 400;
    if(confirmDiscountQualification(strInput)) {
        return `符合優惠資格，票價為${ticketPrice/2}元`
    }else{
        return `不符合優惠資格，票價為原價${ticketPrice}元`
    }
};