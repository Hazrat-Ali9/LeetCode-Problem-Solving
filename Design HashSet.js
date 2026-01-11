class MyHashSet {
    constructor() {
        this.size = 1000;
        this.buckets = Array.from({ length: this.size }, () => []);
    }

    hash(key) {
        return key % this.size;
    }

    add(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        const idx = bucket.indexOf(key);
        if (idx !== -1) {
            bucket.splice(idx, 1);
        }
    }

    contains(key) {
        const index = this.hash(key);
        return this.buckets[index].includes(key);
    }
}

