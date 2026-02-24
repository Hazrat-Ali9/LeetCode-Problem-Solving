var heightChecker = function(heights) {
    
    let expected = [...heights].sort((a, b) => a - b);
    
    let count = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++;
        }
    }
    
    return count;
};
