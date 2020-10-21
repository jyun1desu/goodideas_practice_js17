//細菌會變成幾隻
module.exports = function twofold(b, m){
    if(m===0){
        return b //一開始培養品裡的細菌
    }else{
        return Math.pow(2,1/20) * twofold(b,m-1) //每過一分鐘就成長2的1/20次方
    }
}