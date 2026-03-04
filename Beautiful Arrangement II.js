var constructArray = function(n, k) {
    let result = [];
    
    let left = 1;
    let right = k + 1;
    
    while (left <= right) {
        result.push(left++);
        if (left <= right) {
            result.push(right--);
        }
    }
    
    for (let i = k + 2; i <= n; i++) {
        result.push(i);
    }
    
    return result;
};
