var multiply = function (num1, num2) {
 
    if (num1 === "0" || num2 === "0") return "0";

    let n = num1.length;
    let m = num2.length;

    let result = new Array(n + m).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0');
            let sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    let ans = result.join('');

    while (ans[0] === '0') {
        ans = ans.slice(1);
    }

    return ans;
};

