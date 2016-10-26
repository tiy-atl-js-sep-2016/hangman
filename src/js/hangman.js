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
  this.word = this.dictionary.getWord();
  this.alphabet = ALPHABET;
};

Game.prototype.renderAlphabet = function () {
  var alphabetHTML = this.alphabet.map(function (letter) {
    return `<span class="letter">${letter.toUpperCase()}</span>`;
  });
  return alphabetHTML.join("");
};

Game.prototype.makeGuess = function (guess) {
  this.guesses.push(guess);
  if (!this.word.includes(guess)) {
    this.turnsLeft -= 1;
  }
};

export { Game };
