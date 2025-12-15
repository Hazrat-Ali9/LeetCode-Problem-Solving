var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; 

    const rotated = nums.slice(n - k).concat(nums.slice(0, n - k));

  
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};

