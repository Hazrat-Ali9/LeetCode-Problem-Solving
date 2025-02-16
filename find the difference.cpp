class Solution {
public:
    char findTheDifference(string s, string t) {
        unordered_map<char, int> mp;
        for(char x : s) mp[x]++;
        char ans;
        for(char x : t){
            if(--mp[x] < 0){
                ans = x;
                break;
            }
        }
        return ans;
    }
};