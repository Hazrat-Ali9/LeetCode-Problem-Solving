var shoppingOffers = function(price, special, needs) {
    let memo = new Map();

    function dfs(currNeeds) {
        let key = currNeeds.join(',');
        if (memo.has(key)) return memo.get(key);


        let minCost = 0;
        for (let i = 0; i < currNeeds.length; i++) {
            minCost += currNeeds[i] * price[i];
        }

      
        for (let offer of special) {
            let newNeeds = [];
            let valid = true;

            for (let i = 0; i < currNeeds.length; i++) {
                if (offer[i] > currNeeds[i]) {
                    valid = false;
                    break;
                }
                newNeeds.push(currNeeds[i] - offer[i]);
            }

            if (valid) {
                let cost = offer[offer.length - 1] + dfs(newNeeds);
                minCost = Math.min(minCost, cost);
            }
        }

        memo.set(key, minCost);
        return minCost;
    }

    return dfs(needs);
};
