/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {

  let max = 0;
  let maxCount = 0;

  const map = {};
  for (let task of tasks) {
    map[task] = ~~map[task] + 1;
    if (map[task] === max) {
      maxCount++;
    } else if (map[task] > max) {
      max = map[task];
      maxCount = 1;
    }
  }

  const groups = max - 1;
  const coolingLeft = n - (maxCount - 1);


  const emptySlots = groups * coolingLeft;
  const tasksLeft = tasks.length - max * maxCount;


  const idle = Math.max(0, emptySlots - tasksLeft);

  return tasks.length + idle;
};