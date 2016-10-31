import _ from 'lodash';

var BASIC_DICTIONARY = [
  "tired", "trampoline", "jazz", "banjo",
  "ninja", "sleep", "bourbon", "gin",
  "cocktails", "fridays", "beaches", "dogs",
  "stimulate", "monopolize", "create", "challenging"
];

class ArrayDictionary {
  constructor (words) {
    this.words = words || BASIC_DICTIONARY;
  }

  getWord () {
    return _.sample(this.words);
  }
}

var dictionary = new ArrayDictionary();
console.log(dictionary.getWord());

// function ArrayDictionary (words) {
//   this.words = words || BASIC_DICTIONARY;
// };

// ArrayDictionary.prototype.getWord = function () {
//   return _.sample(this.words);
// };

// function FileDictionary (file) {
//   this.words = [];
// };

export { ArrayDictionary };
