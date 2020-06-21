/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = []
    function tree(root){
        if(root){
            tree(root.left)
            arr.push(root.val)
            tree(root.right)
        }
    }
    tree(root)
    return arr
};