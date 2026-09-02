/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let flips = 0;
    let ones = 0;

    for (const ch of s) {
        if (ch === '1') {
        
            ones++;
        } else {
                  
            flips = Math.min(flips + 1, ones);
        }
    }

    return flips;
};
