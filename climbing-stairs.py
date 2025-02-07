class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2: return n
        a, b, ans = 2, 1, 0
        for i in range(3, n+1):
            ans = a+b
            b = a
            a = ans
        return ans
    # Climbing Stairs