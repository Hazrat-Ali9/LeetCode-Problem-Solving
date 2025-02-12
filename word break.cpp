class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        vector<bool> dp(s.size());
        dp[0] = true;
        for(int i=0; i<=s.size(); i++){
            for(auto str : wordDict){
                if(dp[i] && s.substr(i, str.size()).compare(str)==0){
                    dp[i+str.size()] = true;
                }
            }
        }
        return dp[s.size()];
    }
};