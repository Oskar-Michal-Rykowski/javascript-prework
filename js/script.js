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

let gameResult =
  'Ups! Musisz wpisać 1, 2 lub 3, by program zadziałał poprawnie. Odśwież stronę, by spróbować jeszcze raz!';

if (playerMove == 'kamień' && computerMove == 'papier') {
  gameResult = 'Komputer wygrał! Odegraj się w następnej rundzie!';
}

if (playerMove == 'papier' && computerMove == 'nożyce') {
  gameResult = 'Komputer wygrał! Odegraj się w następnej rundzie!';
}

if (playerMove == 'nożyce' && computerMove == 'kamień') {
  gameResult = 'Komputer wygrał! Odegraj się w następnej rundzie!';
}

if (playerMove == 'papier' && computerMove == 'kamień') {
  gameResult = 'Gratulujemy wygranej!';
}

if (playerMove == 'nożyce' && computerMove == 'papier') {
  gameResult = 'Gratulujemy wygranej!';
}

if (playerMove == 'kamień' && computerMove == 'nożyce') {
  gameResult = 'Gratulujemy wygranej!';
}

if (playerMove == computerMove) {
  gameResult = 'Remis!';
}

printMessage(gameResult);
