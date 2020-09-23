const confirmNatureNumber = require('./confirmNatureNumber');
const conculateTicketPrice = require('./conculateTicketPrice');

module.exports = function informTicketPrice(strInput){
    let confirmStatus = confirmNatureNumber(strInput);
        if (confirmStatus !== 'natureNumber') {
            throw confirmStatus
        }
        return conculateTicketPrice(strInput);
}