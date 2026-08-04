/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = [];

    function dfs(node) {
        if (!node) return;

        for (const child of node.children) {
            dfs(child);
        }

        result.push(node.val);
    }

    dfs(root);
    return result;
};
