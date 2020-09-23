
//是否播放電影
module.exports = function movieAvailible(strInput){
    const numInput = Number(strInput)
    //售票張數大於0
    if(numInput !== 0){
        return `今日售出${strInput}張電影票，電影正常播映`;
    }
    //沒人買票
    else {
        return '今日未售出電影票，電影將不放映';
    }
}
