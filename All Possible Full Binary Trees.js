/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    const memo = new Map();

    function build(nodes) {
        if (memo.has(nodes)) return memo.get(nodes);

        const res = [];

        if (nodes === 1) {
            res.push(new TreeNode(0));
        } else if (nodes % 2 === 1) {
            for (let leftNodes = 1; leftNodes < nodes; leftNodes += 2) {
                const rightNodes = nodes - 1 - leftNodes;

                const leftTrees = build(leftNodes);
                const rightTrees = build(rightNodes);

                for (const left of leftTrees) {
                    for (const right of rightTrees) {
                        res.push(new TreeNode(0, left, right));
                    }
                }
            }
        }

        memo.set(nodes, res);
        return res;
    }

    return build(n);
};
