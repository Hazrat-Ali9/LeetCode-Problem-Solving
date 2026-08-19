/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const map = new Map();
    const result = [];

    // ID 0 represents a null subtree
    let id = 1;

    function dfs(node) {
        if (!node) return 0;

        const leftId = dfs(node.left);
        const rightId = dfs(node.right);

        const key = `${node.val},${leftId},${rightId}`;

        if (!map.has(key)) {
            map.set(key, {
                id: id++,
                count: 0
            });
        }

        const info = map.get(key);
        info.count++;

        if (info.count === 2) {
            result.push(node);
        }

        return info.id;
    }

    dfs(root);

    return result;
};
