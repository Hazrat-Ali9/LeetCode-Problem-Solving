var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const n = functions.length;
        if (n === 0) return resolve([]);

        const results = new Array(n);
        let completed = 0;

        for (let i = 0; i < n; i++) {
            try {
                functions[i]().then(
                    (value) => {
                        results[i] = value;
                        completed++;
                        if (completed === n) {
                            resolve(results);
                        }
                    },
                    (error) => {
                        reject(error);
                    }
                );
            } catch (err) {
                reject(err);
            }
        }
    });
};

