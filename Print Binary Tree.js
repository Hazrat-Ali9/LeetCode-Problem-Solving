/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 */

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
    function getHeight(node) {
        if (!node) return -1;

        return 1 + Math.max(
            getHeight(node.left),
            getHeight(node.right)
        );
    }

    const height = getHeight(root);
    const rows = height + 1;
    const cols = Math.pow(2, height + 1) - 1;

    const res = Array.from(
        { length: rows },
        () => Array(cols).fill("")
    );

    function dfs(node, row, col) {
        if (!node) return;

        res[row][col] = String(node.val);

        if (row === height) return;

        const offset = Math.pow(2, height - row - 1);

        dfs(node.left, row + 1, col - offset);

        dfs(node.right, row + 1, col + offset);
    }

    dfs(root, 0, Math.floor((cols - 1) / 2));

    return res;
};
