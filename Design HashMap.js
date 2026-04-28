
class MyHashMap {
    constructor() {
        this.size = 1000;
        this.buckets = Array.from({ length: this.size }, () => []);
    }

    hash(key) {
        return key % this.size;
    }

    put(key, value) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value; 
                return;
            }
        }

        bucket.push([key, value]); 
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return -1;
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}