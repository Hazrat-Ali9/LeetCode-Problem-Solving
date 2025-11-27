var maxSubarraySum = function(nums, k) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

  
    const minPrefix = new Array(k).fill(Infinity);
    minPrefix[0] = 0; 

    let ans = -Infinity;

    for (let i = 1; i <= n; i++) {
        const mod = i % k;

        
        ans = Math.max(ans, prefix[i] - minPrefix[mod]);

        
        minPrefix[mod] = Math.min(minPrefix[mod], prefix[i]);
    }

    return ans;
};
