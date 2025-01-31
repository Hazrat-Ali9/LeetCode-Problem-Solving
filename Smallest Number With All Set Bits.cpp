class Solution {
public:
    int smallestNumber(int n)
    {
        bitset<24>bits(n);
        string num, s = bits.to_string();

        int smallest = s.find('1');
        for(int i = smallest; i < 24; i++)
            num += '1';

        int bit = stoi(num, NULL, 2);
        return bit;
    }
};
