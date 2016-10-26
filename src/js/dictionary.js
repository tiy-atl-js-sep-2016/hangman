import _ from 'lodash';

var BASIC_DICTIONARY = [
  "tired", "trampoline", "jazz", "banjo",
  "ninja", "sleep", "bourbon", "gin",
  "cocktails", "fridays", "beaches", "dogs",
  "stimulate", "monopolize", "create", "challenging"
];

function ArrayDictionary (words) {
  this.words = words || BASIC_DICTIONARY;
};

ArrayDictionary.prototype.getWord = function () {
  return _.sample(this.words);
};

// function FileDictionary (file) {
//   this.words = [];
// };

export { ArrayDictionary };
