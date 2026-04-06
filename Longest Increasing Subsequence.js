function lengthOfLIS(nums) {
    let tails = [];

    for (let num of nums) {
        let left = 0, right = tails.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        tails[left] = num;
    }

    return tails.length;
}
