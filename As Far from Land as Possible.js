var maxDistance = function(grid) {
    const n = grid.length;
    const queue = [];
    let front = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j]);
            }
        }
    }

    if (queue.length === 0 || queue.length === n * n) {
        return -1;
    }

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    let distance = -1;

    while (front < queue.length) {
        const size = queue.length - front;
        distance++;

        for (let k = 0; k < size; k++) {
            const [x, y] = queue[front++];

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (
                    nx >= 0 && nx < n &&
                    ny >= 0 && ny < n &&
                    grid[nx][ny] === 0
                ) {
                    grid[nx][ny] = 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    return distance;
};
