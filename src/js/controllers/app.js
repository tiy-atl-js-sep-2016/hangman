import { gameTemplate } from "../views/game";

class AppController {
  constructor (game, display) {
    this.game = game;
    this.display = display;
  }

  init () {
    this.render();
  }

  render () {
    var html = gameTemplate(this.game);
    this.display.html(html);
    $(".alphabet").click(this.takeTurn);
  }

  takeTurn (event) {
    console.log(this.game);
    var target = $(event.target);
    var letter = target.html();

    this.game.makeGuess(letter);
    this.render();
  }
}

export { AppController };
