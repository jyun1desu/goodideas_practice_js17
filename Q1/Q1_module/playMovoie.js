const movieAvailible = require('./movieAvailible');
const confirmNatureNumber = require('./confirmNatureNumber');

module.exports = function playMovoie(ticketCount) {
    let confirmStatus = confirmNatureNumber(ticketCount);
        if (confirmStatus !== 'natureNumber') {
            throw confirmStatus
        }

        return movieAvailible(ticketCount);
}
