let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + computerMove);

let winnersMove = getWinMoveName(randomNumber);
console.log('Ruch, bijący komputer: ' + winnersMove);

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

printMessage('Twój ruch to: ' + playerMove);

let gameResult = displayResult(playerMove, computerMove);

console.log('Wynik meczu z perspektywy gracza to: ' + gameResult);

printMessage('Rezultat: ' + gameResult);
