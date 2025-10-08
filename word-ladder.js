/**
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  
  const dict = new Set(wordList);

  if (!dict.has(endWord)) {
    return 0;
  }

  let head = new Set([beginWord]);
  let tail = new Set([endWord]);
  let distance = 2;

  dict.delete(beginWord);
  dict.delete(endWord);

  while (head.size > 0 && tail.size > 0) {
    if (head.size > tail.size) {
      [head, tail] = [tail, head];
    }

    const temp = new Set();

    for (let [word] of head.entries()) {
      const characters = word.split('');

      for (let i = 0; i < characters.length; i++) {
        const char = characters[i];

        for (let j = 0; j < 26; j++) {
          characters[i] = String.fromCharCode(97 + j);
          const newWord = characters.join('');

          if (newWord === word) {
            continue;
          }

          if (tail.has(newWord)) {
            return distance;
          }

          if (dict.has(newWord)) {
            dict.delete(newWord);
            temp.add(newWord);
          }
        }

        characters[i] = char;
      }
    }

    distance++;

    head = temp;
  }

  return 0;
};