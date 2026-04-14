var find132pattern = function(nums) {
    let n = nums.length;
    let stack = [];
    let second = -Infinity; 

    for (let i = n - 1; i >= 0; i--) {
      
        if (nums[i] < second) {
            return true;
        }
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            second = stack.pop();
        }

        stack.push(nums[i]);
    }

    return false;
};
