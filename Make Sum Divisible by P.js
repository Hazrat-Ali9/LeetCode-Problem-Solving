var minSubarray = function(nums, p) {
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let need = totalSum % p;

  
    if (need === 0) return 0;

    let prefix = 0;
    let map = new Map();
    map.set(0, -1); 

    let res = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefix = (prefix + nums[i]) % p;

       
        let target = (prefix - need + p) % p;

        if (map.has(target)) {
            res = Math.min(res, i - map.get(target));
        }

    
        map.set(prefix, i);
    }

   
    return res === nums.length ? -1 : res;
};
