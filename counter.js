/**
 * @param {number} n
 * @return {Function} 
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

