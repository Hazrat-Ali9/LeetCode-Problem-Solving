var ambiguousCoordinates = function(s) {
    const res = [];
    s = s.slice(1, -1);

    function generate(str) {
        const result = [];

        for (let i = 1; i <= str.length; i++) {
            const left = str.slice(0, i);
            const right = str.slice(i);

            if (
                (left.length === 1 || left[0] !== '0') &&
                (right.length === 0 || right[right.length - 1] !== '0')
            ) {
                if (right.length === 0) {
                    result.push(left);
                } else {
                    result.push(left + '.' + right);
                }
            }
        }

        return result;
    }

    for (let i = 1; i < s.length; i++) {
        const left = s.slice(0, i);
        const right = s.slice(i);

        for (const x of generate(left)) {
            for (const y of generate(right)) {
                res.push(`(${x}, ${y})`);
            }
        }
    }

    return res;
};
