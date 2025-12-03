Function.prototype.callPolyfill = function(obj, ...args) {

    obj = obj !== null && obj !== undefined ? obj : globalThis;

    const tempKey = Symbol();

    obj[tempKey] = this;

    const result = obj[tempKey](...args);

    delete obj[tempKey];

    return result;
};

