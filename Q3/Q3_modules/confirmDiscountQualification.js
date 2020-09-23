
//確認是否符合優惠資格
module.exports = function confirmDiscountQualification(strInput){
    const numInput = Number(strInput)
    if( numInput<=6 || numInput>=65 ) {
        return true
    }else {
        return false
    }
};