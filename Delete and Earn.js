var deleteAndEarn = function(nums) {

    let maxNum = Math.max(...nums);

    let points = Array(maxNum + 1).fill(0);

    for (let num of nums) {
        points[num] += num;
    }

    let prev2 = 0;
    let prev1 = points[1] || 0;

    for (let i = 2; i <= maxNum; i++) {

        let current = Math.max(
            prev1,
            prev2 + points[i]
        );

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};
