/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let arrX = [0,1,0,-1];
    let arrY = [1,0,-1,0];
    let onIndex = 0;
    let endX = 0;
    let endY = 0;
    let result = 0
    let hashObj = {}
    for(let i = 0; i < obstacles.length; i++){
        hashObj[obstacles[i][0] + '-' + obstacles[i][1]] = true
    }
    for(let j = 0; j < commands.length; j++){
        if(commands[j] == -1 ){
            onIndex = (onIndex+1)%4
        }else if(commands[j] == -2){
            onIndex = (onIndex+3)%4
        }else{
            for(let z = 0; z < commands[j]; z++){
                let nextX = endX + arrX[onIndex]
                let nextY = endY + arrY[onIndex]
                if( hashObj[nextX + '-' + nextY] ){
                    break;
                }
                endX = nextX
                endY = nextY
                result = Math.max(result,endX*endX + endY*endY)
            }
        }
    }
    return result
};