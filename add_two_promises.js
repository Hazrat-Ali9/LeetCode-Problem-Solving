/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  const [val1, val2] = await Promise.all([promise1, promise2]);
  return val1 + val2;
};

