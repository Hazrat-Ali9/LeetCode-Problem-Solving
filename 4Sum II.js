var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map();
    let count = 0;

    for (let a of nums1) {
        for (let b of nums2) {
            let sum = a + b;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    
    for (let c of nums3) {
        for (let d of nums4) {
            let target = -(c + d);
            if (map.has(target)) {
                count += map.get(target);
            }
        }
    }
    
    return count;
};
