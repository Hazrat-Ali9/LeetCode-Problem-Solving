var cancellable = function (fn, args, t) {
  const timerId = setTimeout(() => {
    fn(...args);
  }, t);
 
  return function cancelFn() {
    clearTimeout(timerId); 
  };
};

