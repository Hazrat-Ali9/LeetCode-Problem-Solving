var findShortestSubArray = function(nums) {
    const count = {};
    const first = {};
    const last = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (count[num] === undefined) {
            count[num] = 0;
            first[num] = i;
        }
        count[num]++;
        last[num] = i;
    }
    
    let degree = 0;
    for (let num in count) {
        degree = Math.max(degree, count[num]);
    }
    
    let minLength = nums.length;
    for (let num in count) {
        if (count[num] === degree) {
            minLength = Math.min(
                minLength,
                last[num] - first[num] + 1
            );
        }
    }
    
    return minLength;
};
