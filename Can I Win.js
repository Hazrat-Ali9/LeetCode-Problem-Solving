var canIWin = function(maxChoosableInteger, desiredTotal) {

    if (desiredTotal <= 0) return true;

    let totalSum =
        (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;

    if (totalSum < desiredTotal) return false;

    let memo = new Map();

    function dfs(usedMask, currentTotal) {

        if (memo.has(usedMask)) {
            return memo.get(usedMask);
        }

        for (let i = 1; i <= maxChoosableInteger; i++) {

            let bit = 1 << i;

            if ((usedMask & bit) === 0) {
                if (currentTotal + i >= desiredTotal) {
                    memo.set(usedMask, true);
                    return true;
                }

                if (!dfs(usedMask | bit, currentTotal + i)) {
                    memo.set(usedMask, true);
                    return true;
                }
            }
        }

        memo.set(usedMask, false);
        return false;
    }

    return dfs(0, 0);
};

