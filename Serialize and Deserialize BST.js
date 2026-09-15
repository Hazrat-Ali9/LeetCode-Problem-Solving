var serialize = function(root) {
    if (!root) return "";

    const result = [];

    function preorder(node) {
        if (!node) return;

        result.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }

    preorder(root);

    return result.join(",");
};

var deserialize = function(data) {
    if (!data) return null;

    const values = data.split(",").map(Number);
    let index = 0;

    function build(min, max) {
        if (index >= values.length) return null;

        const value = values[index];

        if (value < min || value > max) {
            return null;
        }

        index++;

        const node = new TreeNode(value);

        node.left = build(min, value - 1);
        node.right = build(value + 1, max);

        return node;
    }

    return build(-Infinity, Infinity);
};
