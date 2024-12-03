'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// MODO PER OTTENERE UN NUMERO RANDOM CHE VA DA 0 A 1 E QUESTO NUMERO RANDOM VIENE MOLTIPLICATO PER 20 + 1
// MATH.TRUNC E PER AVERE UN NUMERO INTERO.

let score = 20;
let highscore = 0;
let i;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // QUI ABBIAMO LAVORATO CON IL PUSLANTE CHECK IN MODO TALE CHE SE LO SCHIACCIO E IL NUMERO E ALTO MI VIENE FUORI IL MESSAGGIO E LA VITA CALA, STESSA COSA SE IL NUMERO VIENE BASSO. SE INVECE NON CE IL NUMERO MI DA IL MESSAGGIO CHE NON E UN NUMERO; SE INVECE VIENE FUORI IL NUMERO CORRETTO MI CAMBIA IN BACKGROUND E IL NUMERO DIVENTA VISIBILE E CAMBIA IL MESSAGGIO .

  if (!guess) {
    document.querySelector('.message').textContent = ' Not a number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      score--;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  window.location.reload();

  // QUI HO FATTO IN MODO CHE QUANDO CLICCO SUL PULSANTE AGAIN MI RICARICA LA PAGINA E QUINDI TUTTO TORNA COME ERA AL INIZIO
});
