class Solution {
public:
    uint32_t reverseBits(uint32_t n) 
    {
        string bits = bitset<32>(n).to_string();
        reverse(bits.begin(),bits.end());

        int ans = stoll(bits, NULL, 2);
        return ans;
    }
};