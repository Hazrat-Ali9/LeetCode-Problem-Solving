/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
const escapeGhosts = (ghosts, target) => {
  for (let ghost of ghosts) {
    if (distance(ghost, target) <= distance([0, 0], target)) {
      return false;
    }
  }
  return true;
};

const distance = (p1, p2) => {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
};


