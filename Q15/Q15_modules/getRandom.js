// 取得0~n的亂數:getRandom(n+1)
module.exports = function getRandom(input){
    return Math.floor(Math.random()*(input+1))
}

