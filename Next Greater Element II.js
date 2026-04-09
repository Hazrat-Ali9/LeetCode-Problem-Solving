var nextGreaterElements = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stack = []; 

    for (let i = 0; i < 2 * n; i++) {
        let num = nums[i % n];

        while (stack.length && nums[stack[stack.length - 1]] < num) {
            let idx = stack.pop();
            res[idx] = num;
        }

        if (i < n) {
            stack.push(i);
        }
    }

    return res;
};
