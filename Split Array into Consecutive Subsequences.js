var isPossible = function(nums) {
    let freq = new Map();
    let need = new Map();

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let num of nums) {
        if (freq.get(num) === 0) continue;

        if ((need.get(num) || 0) > 0) {
            need.set(num, need.get(num) - 1);
            need.set(num + 1, (need.get(num + 1) || 0) + 1);
        }
        else if ((freq.get(num + 1) || 0) > 0 && (freq.get(num + 2) || 0) > 0) {
            freq.set(num + 1, freq.get(num + 1) - 1);
            freq.set(num + 2, freq.get(num + 2) - 1);
            need.set(num + 3, (need.get(num + 3) || 0) + 1);
        }
        else {
            return false;
        }
        freq.set(num, freq.get(num) - 1);
    }

    return true;
};
