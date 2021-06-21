{
  function playGame(playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    console.log('Ruch komputera to: ' + computerMove);

    const winnersMove = getWinMoveName(randomNumber);
    console.log('Ruch bijący komputer: ' + winnersMove);

    printMessage(
      'Zagrałem ' +
        computerMove +
        '! Jeśli Twój ruch to ' +
        winnersMove +
        ', to wygrywasz!'
    );

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    console.log('Ruch gracza to: ' + playerMove);

    printMessage('Twój ruch to: ' + playerMove);

    const gameResult = displayResult(playerMove, computerMove);

    console.log('Wynik meczu z perspektywy gracza to: ' + gameResult);

    printMessage('Rezultat: ' + gameResult);
  }

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });

  document
    .getElementById('play-scissors')
    .addEventListener('click', function () {
      playGame(3);
    });
}
