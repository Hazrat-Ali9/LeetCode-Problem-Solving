var suggestedProducts = function(products, searchWord) {
    products.sort();

    const result = [];
    let prefix = "";

    for (const ch of searchWord) {
        prefix += ch;

        const suggestions = [];
        let left = 0;
        let right = products.length - 1;
        let start = products.length;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (products[mid] >= prefix) {
                start = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        for (let i = start; i < products.length && suggestions.length < 3; i++) {
            if (products[i].startsWith(prefix)) {
                suggestions.push(products[i]);
            } else {
                break;
            }
        }

        result.push(suggestions);
    }

    return result;
};
