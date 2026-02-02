var smallestRangeI = function(nums, k) {
    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);
    
    return Math.max(0, (maxVal - k) - (minVal + k));
};

