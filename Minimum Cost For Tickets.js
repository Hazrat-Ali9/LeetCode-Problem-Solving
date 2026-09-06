var mincostTickets = function(days, costs) {
    const n = days.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let cost1 = costs[0] + dp[i + 1];
        let j = i;
        while (j < n && days[j] < days[i] + 7) {
            j++;
        }
        let cost7 = costs[1] + dp[j];
        j = i;
        while (j < n && days[j] < days[i] + 30) {
            j++;
        }
        let cost30 = costs[2] + dp[j];

        dp[i] = Math.min(cost1, cost7, cost30);
    }

    return dp[0];
};
