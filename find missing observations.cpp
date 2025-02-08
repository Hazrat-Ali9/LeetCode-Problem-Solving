class Solution {
public:
    vector<int> missingRolls(vector<int>& rolls, int mean, int n) {
        int sum = 0;
        for (int i = 0; i < rolls.size(); i++) {
            sum = sum + rolls[i];
        }

        int remainingSum = mean * (n + rolls.size()) - sum;

        if (remainingSum > 6 * n or remainingSum < n) {
            return {};
        }
        int distributeMean = remainingSum / n;
        int mod = remainingSum % n;

        vector<int> nElements(n, distributeMean);
        for (int i = 0; i < mod; i++) {
            nElements[i]++;
        }
        return nElements;
    }
};
