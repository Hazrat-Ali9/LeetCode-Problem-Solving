var countNodes = function(root) {
    if (!root) return 0;

    let left = root;
    let right = root;

    let leftHeight = 0;
    let rightHeight = 0;

    while (left) {
        leftHeight++;
        left = left.left;
    }

    while (right) {
        rightHeight++;
        right = right.right;
    }

    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};
