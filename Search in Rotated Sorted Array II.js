var generateTrees = function(n) {

    if (n === 0) return [];

    function build(start, end) {

        let result = [];
        if (start > end) {
            result.push(null);
            return result;
        }

        for (let i = start; i <= end; i++) {

            let leftTrees = build(start, i - 1);
            let rightTrees = build(i + 1, end);

            for (let left of leftTrees) {
                for (let right of rightTrees) {

                    let root = new TreeNode(i);

                    root.left = left;
                    root.right = right;

                    result.push(root);
                }
            }
        }

        return result;
    }

    return build(1, n);
};
