/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
  let start = 0;
  let tank = 0;
  let total = 0;

  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];

    tank += diff;
    total += diff;

  
    if (tank < 0) {
      
      tank = 0;
     
      start = i + 1;
    }
  }

  return total >= 0 ? start : -1;
};


