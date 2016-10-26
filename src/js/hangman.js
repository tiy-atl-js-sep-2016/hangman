import _ from 'lodash';

var ALPHABET = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z'
];

function Game (options) {
  options = options || {};
  this.turnsLeft = options.turnsLeft || 6;
  this.dictionary = options.dictionary;
  this.guesses = [];
  this.word = this.dictionary.getWord().toLowerCase();
  this.alphabet = ALPHABET;
};

Game.prototype.isOver = function () {
  var that = this;
  var lose = this.turnsLeft === 0;
  var letters = this.word.split("");
  var win = _.every(letters, function (letter) {
    return that.guesses.includes(letter);
  });

  return lose || win;
};

Game.prototype.renderWord = function () {
  var that = this;
  console.log(that);
  var wordHTML = this.word.split("").map(function (letter) {
    if (that.guesses.includes(letter)) {
      return `<span class="word-letter">${letter}</span>`;
    } else {
      return `<span class="word-letter">_</span>`;
    }
  });
  return wordHTML.join("");
};

Game.prototype.renderAlphabet = function () {
  var alphabetHTML = this.alphabet.map(function (letter) {
    return `<span class="letter">${letter.toUpperCase()}</span>`;
  });
  return alphabetHTML.join("");
};

Game.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  this.guesses.push(guess);
  if (!this.word.includes(guess)) {
    this.turnsLeft -= 1;
  }
};

export { Game };
