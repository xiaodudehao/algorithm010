/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let arr = [];
    search(arr,0,root);
    return arr
};

function search(arr_,index_,root_){
    // 如果这个节点为空
    if(root_== null){
        return 
    }
    //如果这个子节点还没有遍历
    if(arr_[index_] == undefined){
        arr_[index_] = []
    }
    arr_[index_].push(root_.val);

    for(let i = 0; i < root_.children.length; i++){
        search(arr_,index_+1,root_.children[i]);
    }


}