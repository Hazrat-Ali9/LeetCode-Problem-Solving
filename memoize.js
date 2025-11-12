/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  const memoized = function(...args) {
    const key = JSON.stringify(args); 
    if (cache.has(key)) {
      return cache.get(key); 
    }

    const result = fn(...args);
    cache.set(key, result); 
    callCount++; 
    return result;
  };

  memoized.getCallCount = () => callCount; 
  return memoized;
}

