var arrangeCoins = function(n) {
    let left = 0, right = n;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let coinsNeeded = mid * (mid + 1) / 2;
        
        if (coinsNeeded === n) {
            return mid;
        } else if (coinsNeeded < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
};

