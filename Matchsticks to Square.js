var makesquare = function(matchsticks) {
    let sum = matchsticks.reduce((a, b) => a + b, 0);

    if (sum % 4 !== 0) return false;

    let side = sum / 4;

    matchsticks.sort((a, b) => b - a);

    let sides = [0, 0, 0, 0];

    function dfs(index) {
        if (index === matchsticks.length) {
            return sides[0] === side &&
                   sides[1] === side &&
                   sides[2] === side &&
                   sides[3] === side;
        }

        let stick = matchsticks[index];

        for (let i = 0; i < 4; i++) {
            if (sides[i] + stick > side) continue;

            sides[i] += stick;

            if (dfs(index + 1)) return true;

            sides[i] -= stick;

            if (sides[i] === 0) break;
        }

        return false;
    }

    return dfs(0);
};
