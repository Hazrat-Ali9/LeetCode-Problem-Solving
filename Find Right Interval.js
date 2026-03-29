function findRightInterval(intervals) {
    const n = intervals.length;

    let starts = [];
    for (let i = 0; i < n; i++) {
        starts.push([intervals[i][0], i]);
    }
    starts.sort((a, b) => a[0] - b[0]);
    function lowerBound(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid][0] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    let ans = new Array(n);

    for (let i = 0; i < n; i++) {
        let end = intervals[i][1];

        let idx = lowerBound(starts, end);

        if (idx === starts.length) {
            ans[i] = -1;
        } else {
            ans[i] = starts[idx][1];
        }
    }

    return ans;
}


let intervals = [[3,4],[2,3],[1,2]];
console.log(findRightInterval(intervals)); 
