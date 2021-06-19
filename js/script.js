let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'błąd';
let winnersMove = 'błąd';

if (randomNumber == '1') {
  computerMove = 'kamień';
  winnersMove = 'papier';
}

if (randomNumber == '2') {
  computerMove = 'papier';
  winnersMove = 'nożyce';
}

if (randomNumber == '3') {
  computerMove = 'nożyce';
  winnersMove = 'kamień';
}

printMessage(
  'Zagrałem ' +
    computerMove +
    '! Jeśli Twój ruch to ' +
    winnersMove +
    ', to wygrywasz!'
);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
}

if (playerInput == '2') {
  playerMove = 'papier';
}

if (playerInput == '3') {
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

let gameResult = 'Ups! Błąd';

if (playerInput == '1' && computerMove == '2') {
  gameResult = 'Gratulujemy wygranej!';
} else {
  gameResult = 'Komputer wygrał! Odegraj się w następnej partii!';

if (playerInput == '2' && computerMove == '3') {
  gameResult = 'Gratulujemy wygranej!';
} else {
  gameResult = 'Komputer wygrał! Odegraj się w następnej partii!';

if (playerInput == '3' && computerMove == '1') {
  gameResult = 'Gratulujemy wygranej!';
} else {
  gameResult = 'Komputer wygrał! Odegraj się w następnej partii!';

if (playerInput == computerMove) {
  gameResult = 'Remis!';
} else {
  gameResult = 'Komputer wygrał! Odegraj się w następnej partii!';
}

printMessage('Wynik?'+ gameResult)