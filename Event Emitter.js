class EventEmitter {
    constructor() {
        this.events = {};   
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        const listeners = this.events[eventName];
        listeners.push(callback);

        return {
            unsubscribe: () => {
                const idx = listeners.indexOf(callback);
                if (idx !== -1) {
                    listeners.splice(idx, 1);   
                }
                return undefined;
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];

        const results = [];
        for (const cb of this.events[eventName]) {
            results.push(cb(...args));
        }
        return results;
    }
}

