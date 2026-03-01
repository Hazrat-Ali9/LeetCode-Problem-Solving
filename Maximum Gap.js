var maximumGap = function(nums) {
    if (nums.length < 2) return 0;

    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);

    if (minVal === maxVal) return 0;

    let n = nums.length;

    let bucketSize = Math.ceil((maxVal - minVal) / (n - 1));
    let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;

    let buckets = Array(bucketCount).fill().map(() => ({
        min: Infinity,
        max: -Infinity,
        used: false
    }));

    for (let num of nums) {
        let index = Math.floor((num - minVal) / bucketSize);
        buckets[index].used = true;
        buckets[index].min = Math.min(buckets[index].min, num);
        buckets[index].max = Math.max(buckets[index].max, num);
    }

    let prevMax = minVal;
    let maxGap = 0;

    for (let bucket of buckets) {
        if (!bucket.used) continue;

        maxGap = Math.max(maxGap, bucket.min - prevMax);
        prevMax = bucket.max;
    }

    return maxGap;
};
