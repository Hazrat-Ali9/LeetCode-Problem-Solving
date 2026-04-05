var arrayNesting = function(nums) {
    const n = nums.length;
    const visited = new Array(n).fill(false);
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let count = 0;
            let current = i;

            while (!visited[current]) {
                visited[current] = true;
                current = nums[current];
                count++;
            }

            maxLen = Math.max(maxLen, count);
        }
    }

    return maxLen;
};
