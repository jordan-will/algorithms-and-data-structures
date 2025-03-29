class TrieNode {
  constructor() {
      this.children = {}; // Children represented as a map of characters
      this.isEndOfWord = false; // Indicates the end of a word
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode(); // Root of the Trie
  }

  // Insert a word into the Trie
  insert(word) {
      let currentNode = this.root;
      for (const char of word) {
          if (!currentNode.children[char]) {
              currentNode.children[char] = new TrieNode(); // Create the child node for the character
          }
          currentNode = currentNode.children[char];
      }
      currentNode.isEndOfWord = true; // Mark the end of the word
  }

  // Search for a word in the Trie
  search(word) {
      let currentNode = this.root;
      for (const char of word) {
          if (!currentNode.children[char]) {
              return false; // Word not found
          }
          currentNode = currentNode.children[char];
      }
      return currentNode.isEndOfWord; // Return whether it is a complete word
  }

  // Search for a prefix (for autocomplete)
  startsWith(prefix) {
      let currentNode = this.root;
      for (const char of prefix) {
          if (!currentNode.children[char]) {
              return false; // Prefix not found
          }
          currentNode = currentNode.children[char];
      }
      return true; // Prefix exists in the Trie
  }

  // Suggest words (autocomplete)
  autocomplete(prefix) {
      const suggestions = [];
      const currentNode = this.getNode(prefix);

      if (!currentNode) return suggestions; // No suggestions if the prefix does not exist

      this.collectWords(currentNode, prefix, suggestions);
      return suggestions;
  }

  // Helper: Returns the node corresponding to the prefix
  getNode(prefix) {
      let currentNode = this.root;
      for (const char of prefix) {
          if (!currentNode.children[char]) {
              return null;
          }
          currentNode = currentNode.children[char];
      }
      return currentNode;
  }

  // Helper: Collects all words from a node
  collectWords(node, prefix, suggestions) {
      if (node.isEndOfWord) {
          suggestions.push(prefix); // Add complete word
      }
      for (const char in node.children) {
          this.collectWords(node.children[char], prefix + char, suggestions); // Recursion
      }
  }
}

/*
  TESTING WITH
  WORDS IN BRAZILINA PORTUGUESE
*/

const trie = new Trie();
trie.insert("carro");
trie.insert("casa");
trie.insert("casamento");
trie.insert("casual");

console.log("Search 'casa':", trie.search("casa")); 
console.log("Prefix 'cas':", trie.startsWith("cas"));
console.log("Suggestions for 'cas':", trie.autocomplete("cas")); 
console.log("Suggestions for 'car':", trie.autocomplete("car")); 