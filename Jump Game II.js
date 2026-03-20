var jump = function(nums) {
    let jumps = 0;
    let end = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === end) {
            jumps++;
            end = farthest;
        }
    }

    return jumps;
};
