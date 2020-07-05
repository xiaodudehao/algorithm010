/**
 * @param {character[][]} grid
 * @return {number}
 */
function deletLand(grid,i,j,col,row){
    if(i < 0 || j < 0 || i + 1 > col || j + 1 > row || grid[i][j] == "0" ){
        return;
    }

    grid[i][j] = "0"

    deletLand(grid,i+1,j,col,row);
    deletLand(grid,i,j+1,col,row);
    deletLand(grid,i-1,j,col,row);
    deletLand(grid,i,j-1,col,row);
}

var numIslands = function(grid) {
    let res = 0;
    let col = grid.length;
    if(col === 0) return 0;
    let row = grid[0].length;
    for(let i = 0; i < col; i++){
        for(let j = 0; j < row; j++){
            if(grid[i][j] == "1"){
            deletLand(grid,i,j,col,row)
            res++
            }
        }
    }
    return res;
};