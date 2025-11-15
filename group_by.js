Array.prototype.groupBy = function(fn) {
    const result = {};

    for (const item of this) {
        const key = fn(item);   
        if (!result[key]) {
            result[key] = [];   
        }
        result[key].push(item); 
    }

    return result;
};

