var levelOrderBottom = function(root) {
    if (!root) return [];

    const queue = [root];
    const result = [];

    let front = 0;

    while (front < queue.length) {
        const levelSize = queue.length - front;
        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue[front++];

            level.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(level);
    }

    return result.reverse();
};
