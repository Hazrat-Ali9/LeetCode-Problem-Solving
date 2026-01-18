var fairCandySwap = function(aliceSizes, bobSizes) {
    const sumA = aliceSizes.reduce((a, b) => a + b, 0);
    const sumB = bobSizes.reduce((a, b) => a + b, 0);
    
    const diff = (sumB - sumA) / 2;
    const bobSet = new Set(bobSizes);

    for (let a of aliceSizes) {
        const b = a + diff;
        if (bobSet.has(b)) {
            return [a, b];
        }
    }
};

