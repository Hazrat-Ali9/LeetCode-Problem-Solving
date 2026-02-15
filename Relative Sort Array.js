var relativeSortArray = function(arr1, arr2) {
    const order = new Map();
    arr2.forEach((num, index) => order.set(num, index));

    return arr1.sort((a, b) => {
        if (order.has(a) && order.has(b)) {
            return order.get(a) - order.get(b);
        } else if (order.has(a)) {
            return -1;
        } else if (order.has(b)) {
            return 1;
        } else {
            return a - b;
        }
    });
};
