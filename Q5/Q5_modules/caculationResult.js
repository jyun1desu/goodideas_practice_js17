const caculationModel = require('./caculationModel');
const confirmAvailibleInput = require('./confirmAvailibleInput')

function caculationResult(strInput){
    let confirmStatus = confirmAvailibleInput(strInput);
        if (confirmStatus !== 'availibleInput') {
            throw confirmStatus
        }

        return caculationModel(strInput);
}

module.exports = caculationResult