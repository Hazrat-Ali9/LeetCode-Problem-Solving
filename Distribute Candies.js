var distributeCandies = function(candyType) {
    const uniqueTypes = new Set(candyType);
    return Math.min(uniqueTypes.size, candyType.length / 2);
};

