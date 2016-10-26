import $ from 'jquery';
import _ from 'lodash';

import { Game } from "./hangman";
import { ArrayDictionary as Dictionary } from "./dictionary";

var dictionary = new Dictionary();
var game = new Game({ dictionary: dictionary });

var alphabetHtml = game.renderAlphabet();
$(".alphabet").html(alphabetHtml);

console.log(game);
