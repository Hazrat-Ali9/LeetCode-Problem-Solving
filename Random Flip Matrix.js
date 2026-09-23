var Solution = function(m, n) {
    this.m = m;
    this.n = n;
    this.total = m * n;
    this.remaining = this.total;
    this.map = new Map();
};

Solution.prototype.flip = function() {
    const randomIndex = Math.floor(Math.random() * this.remaining);

    const actualIndex = this.map.has(randomIndex)
        ? this.map.get(randomIndex)
        : randomIndex;

    const lastIndex = this.remaining - 1;

    if (this.map.has(lastIndex)) {
        this.map.set(randomIndex, this.map.get(lastIndex));
    } else {
        this.map.set(randomIndex, lastIndex);
    }

    this.map.delete(lastIndex);

    this.remaining--;

    return [
        Math.floor(actualIndex / this.n),
        actualIndex % this.n
    ];
};

Solution.prototype.reset = function() {
    this.remaining = this.total;
    this.map.clear();
};
