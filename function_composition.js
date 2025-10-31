/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
    return functions.reduceRight((temp, found) => found(temp), x);
  };
};

