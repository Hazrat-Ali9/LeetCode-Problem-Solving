var pushDominoes = function(dominoes) {

    let arr = ['L', ...dominoes.split(''), 'R'];

    let left = 0;

    for (let right = 1; right < arr.length; right++) {

        if (arr[right] === '.') continue;

        let middle = right - left - 1;

        if (arr[left] === arr[right]) {

            for (let k = left + 1; k < right; k++) {
                arr[k] = arr[left];
            }
        }

        else if (arr[left] === 'R' && arr[right] === 'L') {

            let l = left + 1;
            let r = right - 1;

            while (l < r) {
                arr[l++] = 'R';
                arr[r--] = 'L';
            }
        }

        left = right;
    }

    return arr.slice(1, -1).join('');
};
