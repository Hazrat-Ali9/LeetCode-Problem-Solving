/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const MOD = 1000000007;


    const moves = [
        [4, 6],       
        [6, 8],     
        [7, 9],       
        [4, 8],      
        [0, 3, 9],    
        [],           
        [0, 1, 7],    
        [2, 6],      
        [1, 3],       
        [2, 4]        
    ];

    let dp = new Array(10).fill(1);

    for (let step = 1; step < n; step++) {
        const next = new Array(10).fill(0);

        for (let digit = 0; digit < 10; digit++) {
            for (const nextDigit of moves[digit]) {
                next[nextDigit] = (next[nextDigit] + dp[digit]) % MOD;
            }
        }

        dp = next;
    }

    let answer = 0;

    for (const count of dp) {
        answer = (answer + count) % MOD;
    }

    return answer;
};
