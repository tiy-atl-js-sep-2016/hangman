function gameTemplate (game) {
  var wordHtml = renderWord(game);
  var alphabetHtml = renderAlphabet(game);

  return `
     <div class="alphabet">
       ${alphabetHtml}
     </div>
     <div class="word">
       ${wordHtml}
     </div>
    `;
};

function renderWord (game) {
  var wordHTML = game.word.split("").map(function (letter) {
    if (game.guesses.includes(letter)) {
      return `<span class="word-letter">${letter}</span>`;
    } else {
      return `<span class="word-letter">_</span>`;
    }
  });
  return wordHTML.join("");
}

function renderAlphabet (game) {
  var alphabetHTML = game.alphabet.map(function (letter) {
    if (game.guesses.includes(letter)) {
      return `<span class="letter guessed">${letter.toUpperCase()}</span>`;
    } else {
      return `<span class="letter">${letter.toUpperCase()}</span>`;
    }
  });
  return alphabetHTML.join("");
}


export { gameTemplate };
