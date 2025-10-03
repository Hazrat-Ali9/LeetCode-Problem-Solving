/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  const result = [];
  const trie = new Trie(words);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, trie.root, result);
    }
  }

  return result;
};

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const dfs = (board, i, j, current, result) => {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return;
  }

  const c = board[i][j];

  if (c === '#' || !current.children[c]) {
    return;
  }

  current = current.children[c];

  if (current.word) {

    result.push(current.word);
    
    current.word = null;
  }

  board[i][j] = '#'; 

  for (let k = 0; k < 4; k++) {
    dfs(board, i + dx[k], j + dy[k], current, result);
  }

  board[i][j] = c; 
};

class Trie {
  constructor(words) {
    this.root = new TrieNode();

    words.forEach(word => {
      this.addWord(word);
    });
  }

  addWord(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.children)) {
        current.children[word[i]] = new TrieNode();
      }
      current = current.children[word[i]];
    }

    current.word = word;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}