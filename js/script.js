let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + computerMove);

let winnersMove = getWinMoveName(randomNumber);
console.log('Ruch, bijący komputer: ' + winnersMove);
/*
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
*/

printMessage(
  'Zagrałem ' +
    computerMove +
    '! Jeśli Twój ruch to ' +
    winnersMove +
    ', to wygrywasz!'
);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

console.log('Ruch gracza to: ' + playerMove);
/*
if (playerInput == '1') {
  playerMove = 'kamień';
}

if (playerInput == '2') {
  playerMove = 'papier';
}

if (playerInput == '3') {
  playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);

let gameResult = displayResult(playerMove, computerMove);

console.log('Wynik meczu z perspektywy gracza to: ' + gameResult);
/*

let gameResult =
  'Ups! Musisz wpisać 1, 2 lub 3, by program zadziałał poprawnie. Odśwież stronę, by spróbować jeszcze raz!';

if (playerMove == 'kamień' && computerMove == 'papier') {
  gameResult = 'Przegrana';
}

if (playerMove == 'papier' && computerMove == 'nożyce') {
  gameResult = 'Przegrana';
}

if (playerMove == 'nożyce' && computerMove == 'kamień') {
  gameResult = 'Przegrana';
}

if (playerMove == 'papier' && computerMove == 'kamień') {
  gameResult = 'Wygrana';
}

if (playerMove == 'nożyce' && computerMove == 'papier') {
  gameResult = 'Wygrana';
}

if (playerMove == 'kamień' && computerMove == 'nożyce') {
  gameResult = 'Wygrana';
}

if (playerMove == computerMove) {
  gameResult = 'Remis!';
}

*/

printMessage('Rezultat: ' + gameResult);
