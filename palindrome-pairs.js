const isPalindrome = (str, i, j) => {
  while (i < j) {
    if (str[i++] !== str[j--]) {
      return false;
    }
  }
  return true;
};

class TrieNode {
  constructor() {
    this.children = {};
    this.index = -1;
    this.palindromeIndices = [];
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();

    words.forEach((word, index) => {
      this.insert(word, index);
    });
  }

  insert(word, index) {
    let current = this.root;

    for (let i = word.length - 1; i >= 0; i--) {
      const c = word[i];

      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }

      if (isPalindrome(word, 0, i)) {
        current.palindromeIndices.push(index);
      }

      current = current.children[c];
    }

    current.index = index;
    current.palindromeIndices.push(index);
  }

  search(word, index) {
    const pairs = [];

    let current = this.root;

    for (let i = 0; i < word.length; i++) {
   
      if (current.index >= 0 && current.index !== index && isPalindrome(word, i, word.length - 1)) {
        pairs.push([index, current.index]);
      }

      const c = word[i];

      if (!current.children[c]) {
        return pairs; 
      }

      current = current.children[c];
    }

    current.palindromeIndices.forEach(i => {
      if (i !== index) {
        pairs.push([index, i]);
      }
    });

    return pairs;
  }
}

/**
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = words => {
  let results = [];
  const trie = new Trie(words);

  words.forEach((word, index) => {
    const pairs = trie.search(word, index);
    results = results.concat(pairs);
  });

  return results;
};
