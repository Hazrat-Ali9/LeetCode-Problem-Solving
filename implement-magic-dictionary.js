class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class MagicDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string[]} dict
   * @return {void}
   */
  buildDict(dict) {
    dict.forEach(word => {
      this.insert(word);
    });
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }
      current = current.children[c];
    }
    current.isEnd = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        const letter = letters[j];

        if (word[i] !== letter) {
          const modifiedWord = word.substr(0, i) + letter + word.substr(i + 1);

          if (this.match(modifiedWord)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  match(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!current.children[c]) {
        return false;
      }
      current = current.children[c];
    }
    return current.isEnd;
  }
}