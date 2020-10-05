// 有一輛搬運車，限重1噸，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg
// 在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量
// 以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量

// sport[]
// sport[0]*30 啞鈴總重
// sport[1]*20 單槓總重
// sport[2]*50 跑步機總重

// 取得0~2的亂數:getRandom(3)
function getRandom(input){
    return Math.floor(Math.random()*input)
}
//取得總重跟數量
let sport = [0,0,0]
let totalweight = 0
function getTotal(){
    do {
        if(getRandom(3) === 0){
            totalweight += 30
            sport[0]++
        }
        if(getRandom(3) === 1){
            totalweight += 20
            sport[1]++
        }
        if(getRandom(3) === 2){
            totalweight += 50
            sport[2]++
        }
    } while (totalweight < 1000);
    return {sport,totalweight}
}

getTotal()
const result = `啞鈴${sport[0]}箱、單槓${sport[1]}箱、跑步機${sport[2]}台，總重${totalweight}公斤。`
console.log(result)