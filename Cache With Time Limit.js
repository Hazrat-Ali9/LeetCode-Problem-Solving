
class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); 
    }

    set(key, value, duration) {
        const now = Date.now();
        const exists = this.cache.has(key) && this.cache.get(key).expireTime > now;

        this.cache.set(key, {
            value: value,
            expireTime: now + duration
        });

        return exists; 
    }

    get(key) {
        const now = Date.now();

        if (!this.cache.has(key)) {
            return -1;
        }

        const entry = this.cache.get(key);

        if (entry.expireTime <= now) {
            this.cache.delete(key);
            return -1;
        }

        return entry.value;
    }

    count() {
        const now = Date.now();
        let active = 0;

        for (const [key, entry] of this.cache.entries()) {
            if (entry.expireTime > now) {
                active++;
            } else {
                this.cache.delete(key); 
            }
        }

        return active;
    }
}
