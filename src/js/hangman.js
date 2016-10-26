function Game (options) {
  options = options || {};
  this.turnsLeft = options.turnsLeft || 6;
  this.dictionary = options.dictionary;
  this.guesses = [];
  this.word = this.dictionary.getWord();
};

Game.prototype.makeGuess = function (guess) {
  this.guesses.push(guess);
  if (!this.word.includes("o")) {
    this.turnsLeft -= 1;
  }
};

export { Game };
