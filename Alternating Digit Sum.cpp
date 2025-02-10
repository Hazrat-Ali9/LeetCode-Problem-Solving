class Solution {
public:
    int alternateDigitSum(int n)
    {
        string s = to_string(n);
        int ans = 0, temp = true, val;
        for(char ch:s)
        {
            val = ch - '0';
            ans += (temp ? val : -val);
            temp = !temp;
        }
        return ans;
    }
};
