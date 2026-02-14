var diStringMatch = function(s) {
    let n = s.length;
    let low = 0;
    let high = n;
    let result = [];

    for (let i = 0; i < n; i++) {
        if (s[i] === 'I') {
            result.push(low);
            low++;
        } else { 
            result.push(high);
            high--;
        }
    }
    result.push(low);  

    return result;
};

