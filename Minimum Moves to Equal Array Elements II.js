var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);

    let n = nums.length;
    let median = nums[Math.floor(n / 2)];

    let moves = 0;
    for (let num of nums) {
        moves += Math.abs(num - median);
    }

    return moves;
};
