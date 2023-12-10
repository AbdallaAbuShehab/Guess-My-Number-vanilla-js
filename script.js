'use strict';

// select element
const msg = document.querySelector('.message');
const boxNumber = document.querySelector('.number');
const bodyClr = document.querySelector('body');
const scoreGame = document.querySelector('.score');
const highScoreGame = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let highScore = 0;
let score, secretNumber, playing;
// intal value
const intalValue = function () {
  score = 20;
  // state of play
  playing = 1;
  // random secret num between 1 to 20
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  msg.textContent = `Start guessing...`;
  boxNumber.style.width = '15rem';
  boxNumber.textContent = '?';
  bodyClr.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  scoreGame.textContent = 20;
};
intalValue();

// display message
const displayMessage = function (str) {
  msg.textContent = str;
};
// display score
const displayScore = function (scr) {
  scoreGame.textContent = scr;
};
// display highscore
const displayHighscore = function (hscr) {
  highScoreGame.textContent = hscr;
};

btnCheck.addEventListener('click', function () {
  if (playing) {
    const numberGuess = Number(document.querySelector('.guess').value);

    if (numberGuess >= 1 && numberGuess <= 20) {
      if (numberGuess === secretNumber) {
        msg.textContent = `🎉 Correct Number!`;
        boxNumber.style.width = '30rem';
        boxNumber.textContent = secretNumber;
        bodyClr.style.backgroundColor = '#60b347';
        if (score > highScore) {
          highScore = score;
          displayHighscore(highScore);
        }
        playing--;
      } else if (numberGuess !== secretNumber) {
        if (score > 1) {
          numberGuess > secretNumber
            ? displayMessage('📈 Too high!')
            : displayMessage('📉 Too low!');
          score--;
          displayScore(score);
        } else {
          displayMessage('💥 You lost the game!');
          displayScore(0);
          bodyClr.style.backgroundColor = '#ED2B2A';
          playing--;
        }
      }
    } else {
      displayMessage(`⛔️ Enter number between 1 and 20!`);
    }
  }
});

btnAgain.addEventListener('click', intalValue);
