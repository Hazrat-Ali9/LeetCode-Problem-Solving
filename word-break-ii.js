/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = (s, wordDict) => {
  if (!canBreak(s, wordDict)) {
    return [];
  }

  const result = [];
  dfs(s, wordDict, 0, [], result);
  return result;
};

const dfs = (s, wordDict, start, solution, result) => {
  if (start === s.length) {
    result.push(solution.join(' '));
  }

  for (let end = start + 1; end <= s.length; end++) {
    const prefix = s.substring(start, end);

    if (wordDict.includes(prefix)) {
      solution.push(prefix);
      dfs(s, wordDict, end, solution, result);
      solution.pop();
    }
  }
};

const canBreak = (s, wordDict) => {
  const table = Array(s.length + 1).fill(false);

  table[0] = true; 

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const rest = s.substring(j, i);

      if (table[j] && wordDict.includes(rest)) {
        table[i] = true;
        break;
      }
    }
  }

  return table[s.length];
};
