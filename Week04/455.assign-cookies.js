/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {

    let gIndex = 0, sIndex = 0, res = 0;
    let gLen = g.length;
    let sLen = s.length;
    let gSort = g.sort((a,b)=> a-b)
    let sSort = s.sort((a,b)=> a-b)
    while(gIndex < gLen && sIndex < sLen){
        if(gSort[gIndex] <= sSort[sIndex]){
            gIndex++
            res++
        }
        sIndex++
    }

    return res

};