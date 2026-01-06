var findRestaurant = function(list1, list2) {
    const map = new Map();
    
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    let minSum = Infinity;
    let result = [];

    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            const indexSum = j + map.get(list2[j]);

            if (indexSum < minSum) {
                minSum = indexSum;
                result = [list2[j]];
            } else if (indexSum === minSum) {
                result.push(list2[j]);
            }
        }
    }

    return result;
};

