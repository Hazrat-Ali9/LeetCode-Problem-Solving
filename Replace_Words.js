class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

var replaceWords = function(dictionary, sentence) {

    let root = new TrieNode();

    for (let word of dictionary) {
        let node = root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    function findRoot(word) {
        let node = root;
        let prefix = "";

        for (let char of word) {
            if (!node.children[char]) return word;
            prefix += char;
            node = node.children[char];

            if (node.isEnd) return prefix;
        }

        return word;
    }

    return sentence
        .split(" ")
        .map(word => findRoot(word))
        .join(" ");
};
