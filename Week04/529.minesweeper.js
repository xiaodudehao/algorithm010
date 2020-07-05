/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    //统计坐标周围的雷
    let mineNum = function(x,y){
        let res = 0;
        for(let i = 0; i < 8; i++){
            // 新坐标
            let newX = x + loopX[i];
            let newY = y + loopY[i];
            //判断新坐标是否越界
            if(newX >= 0 && newX < row && newY >= 0 && newY < col){
                if(board[newX][newY] == 'M'){
                    res++
                }
            }
        }
        return res
    }

    //遍历坐标
    let map = function(x,y){
        // 递归终止条件
        if(x < 0 || x >= row || y < 0 || y >= col){
            return
        }
        //如果点到地雷了
        if(board[x][y] == 'M'){
            board[x][y] = 'X'
            return;
        }
        //如果没有点到地雷
        //是未点击的格子
        //周围没有雷,标记为B，并且递归
        if(board[x][y] == 'E'){
            let number = mineNum(x,y).toString()
            if(number > 0){
                board[x][y] = number
            }else{
                            board[x][y] = 'B'
            for(let i = 0; i < 8; i++){
                map(x + loopX[i], y +loopY[i])
            }
            }
            
        }

    }

    let row = board.length;
    let col = board[0].length;
    let loopX = [0,1,1,1,0,-1,-1,-1];
    let loopY = [1,1,0,-1,-1,-1,0,1];
    map(click[0],click[1])
    return board
};