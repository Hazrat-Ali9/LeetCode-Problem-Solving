class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if s==t: return True
        if len(s)!=len(t): return False
        v = [0]*26
        for i in range(len(s)):
            v[ord(s[i])-ord('a')] += 1
            v[ord(t[i])-ord('a')] -= 1
        for i in range(26):
            if v[i]: return False
        return True

        