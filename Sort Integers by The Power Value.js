var getKth = function(lo, hi, k) {
    function power(x) {
        let steps = 0;

        while (x !== 1) {
            if (x % 2 === 0) {
                x = x / 2;
            } else {
                x = 3 * x + 1;
            }
            steps++;
        }

        return steps;
    }

    const arr = [];

    for (let i = lo; i <= hi; i++) {
        arr.push([i, power(i)]);
    }

    arr.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    return arr[k - 1][0];
};
