var numFriendRequests = function(ages) {
    const count = new Array(121).fill(0);

    for (const age of ages) {
        count[age]++;
    }

    let answer = 0;

    for (let x = 1; x <= 120; x++) {
        if (count[x] === 0) continue;

        for (let y = 1; y <= 120; y++) {
            if (count[y] === 0) continue;

            if (y <= 0.5 * x + 7) continue;

            if (y > x) continue;

            if (y > 100 && x < 100) continue;

            answer += count[x] * count[y];

            if (x === y) {
                answer -= count[x];
            }
        }
    }

    return answer;
};
