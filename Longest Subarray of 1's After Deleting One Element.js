var longestSubarray = function(nums) {
    let left = 0;
    let zeros = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeros++;
        }

        while (zeros > 1) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
};
