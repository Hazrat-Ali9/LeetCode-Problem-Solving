class Solution {
public:
    bool isBalanced(string num)
    {
        map<int, int>mp;
        bool cheak = true;
        for(auto ch:num)
        {
            mp[cheak] += ch - '0';
            cheak = !cheak;
        }
        return mp[0] == mp[1];
    }
};
