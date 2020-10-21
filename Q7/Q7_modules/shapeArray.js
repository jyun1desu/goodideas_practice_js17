//用矩陣做出一顆愛心
let shapeArray = [];
for(let i = 0; i < 8; i++ ){
    shapeArray[i] = [];
    for(let j = 0; j < 9; j++){
            if(i==0 && j>1 && j<7 && j!=4){
                shapeArray[i][j] = "*"
            }
            else if(i==1 && j!=0 && j!=8){
                shapeArray[i][j] = "*"
            }
            else if(i==2){
                shapeArray[i][j] = "*"
            }
            else if(i==3){
                shapeArray[i][j] = "*"
            }
            else if(i==4 && j!=0 && j!=8){
                shapeArray[i][j] = "*"
            }
            else if(i==5 && j!=0 && j!=1 && j!=7 && j!=8){
                shapeArray[i][j] = "*"
            }
            else if(i==6 &&(j==3 || j==4 || j==5)){
                shapeArray[i][j] = "*"
            }
            else if(i==7 && j==4){
                shapeArray[i][j] = "*"
            }
            else{
                shapeArray[i][j] = " "
            }
    }
}
//轉置矩陣
let rotateHeart= []
    for (let i = 0; i < 9; i++) {
        rotateHeart[i] = [];
        for (let j = 0; j < 8; j++) {
                rotateHeart[i][j]=shapeArray[7-j][i]
    }
    }

module.exports = { shapeArray , rotateHeart }