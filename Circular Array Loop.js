function circularArrayLoop(nums) {
    const n = nums.length;

    function nextIndex(i) {
        return ((i + nums[i]) % n + n) % n;
    }

    for (let i = 0; i < n; i++) {
        let slow = i;
        let fast = i;
        const dir = nums[i] > 0;

        while (true) {
    
            let nextSlow = nextIndex(slow);
            if ((nums[nextSlow] > 0) !== dir) break;

            let nextFast = nextIndex(fast);
            if ((nums[nextFast] > 0) !== dir) break;

            nextFast = nextIndex(nextFast);
            if ((nums[nextFast] > 0) !== dir) break;

            slow = nextSlow;
            fast = nextFast;

      
            if (slow === fast) {
                if (slow === nextIndex(slow)) break; 
                return true;
            }
        }
    }

    return false;
}
