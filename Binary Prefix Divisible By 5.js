var prefixesDivBy5 = function(nums) {
    let ans = [];
    let mod = 0;

    for (let b of nums) {
        mod = (mod * 2 + b) % 5;
        ans.push(mod === 0);
    }
    
    return ans;
};

