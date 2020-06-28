/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    //判断当前节点是否为空，是否符合节点；是就返回当前节点
    if(root == null || p == root || q == root){
        return root 
    }
    //递归当前节点的左子树，
    let left = lowestCommonAncestor(root.left,p,q);
    //递归当前节点的右子树
    let right = lowestCommonAncestor(root.right,p,q);
    //如果左右子树都有符合的节点
    if(left && right){
        return root
    }else if(left){ 
        //如果左只有左子树有符合的节点
        return left
    }else if(right){    
        //如果只有右子树有符合的节点
        return right
    }
    //如果根本没有符合的节点
    return null
};