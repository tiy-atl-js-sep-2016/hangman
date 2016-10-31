import _ from 'lodash';

var ALPHABET = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z'
];

class Game {
  constructor (options) {
    options = options || {};
    this.turnsLeft = options.turnsLeft || 6;
    this.dictionary = options.dictionary;
    this.guesses = [];
    this.word = this.dictionary.getWord().toLowerCase();
    this.alphabet = ALPHABET;
  }

  isOver () {
    var lose = this.turnsLeft === 0;
    var letters = this.word.split("");
    var win = _.every(letters, function (letter) {
      return this.guesses.includes(letter);
    }.bind(this));

    return lose || win;
  }

  renderWord () {
    var wordHTML = this.word.split("").map(function (letter) {
      if (this.guesses.includes(letter)) {
        return `<span class="word-letter">${letter}</span>`;
      } else {
        return `<span class="word-letter">_</span>`;
      }
    }, this);
    return wordHTML.join("");
  }

  renderAlphabet () {
    var alphabetHTML = this.alphabet.map(function (letter) {
      if (this.guesses.includes(letter)) {
        return `<span class="letter guessed">${letter.toUpperCase()}</span>`;
      } else {
        return `<span class="letter">${letter.toUpperCase()}</span>`;
      }
    }, this);
    return alphabetHTML.join("");
  }

  makeGuess (guess) {
    guess = guess.toLowerCase();
    if (!this.guesses.includes(guess)) {
      this.guesses.push(guess);
    }
    if (!this.word.includes(guess)) {
      this.turnsLeft -= 1;
    }

  }
}

export { Game };
