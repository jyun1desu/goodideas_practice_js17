const {shapeArray,rotateHeart}=require('./shapeArray')

//做出愛心：正常
let printHeart = ""
for(let i=0;i<8;i++){
    printHeart += shapeArray[i].join(" ") +"\n"
}
//做出愛心：轉90度
let printRotatedHeart =""
for(let i=0;i<9;i++){
    printRotatedHeart += rotateHeart[i].join(" ") +"\n"
}

module.exports = { printHeart , printRotatedHeart }