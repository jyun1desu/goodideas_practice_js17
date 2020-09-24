module.exports = function umleven(num){
    if(num === 2){
        return 0 
    }
    return (num-2)*num + umleven(num-2)
}
