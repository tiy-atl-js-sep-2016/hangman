import $ from 'jquery';

import { Game } from "./models/hangman";
import { ArrayDictionary as Dictionary } from "./models/dictionary";
import { AppController } from "./controllers/app";

var display = $(".display");

var dictionary = new Dictionary();
var game = new Game({ dictionary: dictionary });
var app = new AppController(game, display);

app.init();
