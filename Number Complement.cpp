class Solution {
public:
    int findComplement(int num) 
    {
        bitset<32>bit(num);
        string s = bit.to_string();

        bool temp = false;
        for(auto &ch:s)
        {
            if(ch == '1') temp = true;
            if(temp)
                ch = (ch == '1' ? '0' : '1');
        }
        int n = stoi(s, NULL, 2);
        return n;
    }
};