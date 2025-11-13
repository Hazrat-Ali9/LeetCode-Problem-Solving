/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {

  if (obj === null || obj === undefined || typeof classFunction !== 'function') {
    return false;
  }


  const primitiveWrappers = {
    "string": String,
    "number": Number,
    "boolean": Boolean,
    "symbol": Symbol,
    "bigint": BigInt
  };
  
  if (primitiveWrappers[typeof obj] === classFunction) {
    return true;
  }


  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
    if (proto.constructor === classFunction) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
};

