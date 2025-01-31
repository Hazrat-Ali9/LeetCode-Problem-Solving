class Solution {
public:
    int smallestNumber(int n)
    {
        bitset<24>bits(n);
        string num, s = bits.to_string();

        int idx = s.find('1');
        for(int i = idx; i < 24; i++)
            num += '1';

        int ans = stoi(num, NULL, 2);
        return ans;
    }
};
