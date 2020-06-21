/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    let stack = [root];
    let arr = [];
    while(stack.length){
        let node = stack.pop();
        if (node === null) continue;
        arr.push(node.val);
        if(node.children){
            for(let i = node.children.length-1; i >= 0; i--){
                stack.push(node.children[i]);
            }
        }
    }
    return arr
};