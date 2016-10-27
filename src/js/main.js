import $ from 'jquery';
import _ from 'lodash';

import { Game } from "./hangman";
import { ArrayDictionary as Dictionary } from "./dictionary";

var dictionary = new Dictionary();
var game = new Game({ dictionary: dictionary });

function renderGame () {
  var alphabetHtml = game.renderAlphabet();
  $(".alphabet").html(alphabetHtml);

  var wordHtml = game.renderWord();
  $(".word").html(wordHtml);
}

function takeTurn (event) {
  console.log(game);
  var target = $(event.target);
  var letter = target.html();

  game.makeGuess(letter);
  renderGame();

  if (game.isOver()) {
    $(".container").append("<h1>Game over!</h1>");
  }

};

renderGame();
$(".alphabet").click(takeTurn);
