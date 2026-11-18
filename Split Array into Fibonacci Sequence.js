var splitIntoFibonacci = function(num) {
    let result = [];
    const MAX = 2147483647;

    function backtrack(index) {
        if (index === num.length) {
            return result.length >= 3;
        }

        let current = 0;

        for (let i = index; i < num.length; i++) {
            if (i > index && num[index] === '0') {
                break;
            }

            current = current * 10 + Number(num[i]);

            if (current > MAX) {
                break;
            }

            let size = result.length;

            if (size >= 2) {
                let sum = result[size - 1] + result[size - 2];

                if (current < sum) {
                    continue;
                }

                if (current > sum) {
                    break;
                }
            }

            result.push(current);

            if (backtrack(i + 1)) {
                return true;
            }

            result.pop();
        }

        return false;
    }

    backtrack(0);

    return result.length >= 3 ? result : [];
};

