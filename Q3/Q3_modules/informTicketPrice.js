const confirmNatureNumber = require('./confirmNatureNumber');
const caculateTicketPrice = require('./caculateTicketPrice');

module.exports = function informTicketPrice(strInput){
    let confirmStatus = confirmNatureNumber(strInput);
        if (confirmStatus !== 'natureNumber') {
            throw confirmStatus
        }
        return caculateTicketPrice(strInput);
}
