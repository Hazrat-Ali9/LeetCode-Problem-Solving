var duplicateZeros = function(arr) {
    let n = arr.length;
    let zeros = 0;


    for (let i = 0; i < n; i++) {
        if (i + zeros >= n - 1) break;
        if (arr[i] === 0) zeros++;
    }

    let i = n - 1 - zeros;   
    let j = n - 1;           

   
    while (i >= 0) {
        if (arr[i] === 0) {
            arr[j] = 0;
            j--;
            arr[j] = 0;
            j--;
        } else {
            arr[j] = arr[i];
            j--;
        }
        i--;
    }
};
