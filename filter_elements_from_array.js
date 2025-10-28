function filter(arr, temp) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (temp(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

