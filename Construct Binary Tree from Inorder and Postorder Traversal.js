var buildTree = function(inorder, postorder) {
    let map = new Map();
    
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function helper(left, right) {
        if (left > right) return null;

        let rootVal = postorder[postIndex--];
        let root = new TreeNode(rootVal);

        let index = map.get(rootVal);

        root.right = helper(index + 1, right);
        root.left = helper(left, index - 1);

        return root;
    }

    return helper(0, inorder.length - 1);
};
