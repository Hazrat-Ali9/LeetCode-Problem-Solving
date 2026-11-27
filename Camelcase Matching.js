var camelMatch = function(queries, pattern) {
    function isMatch(query, pattern) {
        let i = 0;
        let j = 0;

        for (let char of query) {
            if (j < pattern.length && char === pattern[j]) {
                j++;
            } 
            else if (char >= 'A' && char <= 'Z') {
                return false;
            }
        }

        return j === pattern.length;
    }

    return queries.map(query => isMatch(query, pattern));
};

