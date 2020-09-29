//龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺
//他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜
//問：兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?

// 每五秒兔子的賽道會增加2公尺，若剛好到終點，就不用再倒退一公尺
function rabbitRecord(tracklength) {
    const rabbitSpeed = 20;
    let timeRabbitSpend = 0;
    do {
        timeRabbitSpend++;
        tracklength = tracklength-rabbitSpeed
        if(timeRabbitSpend%5===0 && tracklength !==0 ){
            tracklength += 2
        }
        if(tracklength<rabbitSpeed){
            timeRabbitSpend += tracklength/rabbitSpeed
            tracklength = 0
        }
    } while (tracklength!==0);
    return timeRabbitSpend
}
//兔子可以偷懶多久
const tracklength = 1000 //賽道長
const turtleSpeed = 0.28 //烏龜秒速
const turtleRecord = (tracklength/turtleSpeed).toFixed(2)
let timeRabbitSpend = rabbitRecord(tracklength)
const result = turtleRecord - timeRabbitSpend
//解答
console.log(`當賽道為${tracklength}公尺時，\n兔子要跑${timeRabbitSpend}秒，烏龜要跑${turtleRecord}秒\n兔子還可以偷懶${result}秒`)