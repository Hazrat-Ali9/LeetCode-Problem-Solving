var NumArray = function(nums) {
    this.n = nums.length;
    this.tree = new Array(2 * this.n).fill(0);

    for (let i = 0; i < this.n; i++) {
        this.tree[this.n + i] = nums[i];
    }

    for (let i = this.n - 1; i > 0; i--) {
        this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1];
    }
};

NumArray.prototype.update = function(index, val) {
    let pos = index + this.n;
    this.tree[pos] = val;

    while (pos > 1) {
        pos = Math.floor(pos / 2);
        this.tree[pos] = this.tree[2 * pos] + this.tree[2 * pos + 1];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    let sum = 0;
    left += this.n;
    right += this.n;

    while (left <= right) {
        if (left % 2 === 1) {
            sum += this.tree[left];
            left++;
        }
        if (right % 2 === 0) {
            sum += this.tree[right];
            right--;
        }
        left = Math.floor(left / 2);
        right = Math.floor(right / 2);
    }

    return sum;
};
