function printMessage(msg) {
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
  if (argMoveId == '1') {
    return 'kamień';
  } else if (argMoveId == '2') {
    return 'papier';
  } else if (argMoveId == '3') {
    return 'nożyce';
  } else {
    return 'błąd';
  }
}

function getWinMoveName(argWinMoveId) {
  if (argWinMoveId == '1') {
    return 'papier';
  } else if (argWinMoveId == '2') {
    return 'nożyce';
  } else if (argWinMoveId == '3') {
    return 'kamień';
  } else {
    return 'błąd';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
    return 'Przegrana';
  } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce') {
    return 'Przegrana';
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
    return 'Przegrana';
  } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    return 'Wygrana';
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    return 'Wygrana';
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    return 'Wygrana';
  } else if ((argPlayerMove = argComputerMove)) {
    return 'Remis';
  } else {
    return 'Błąd';
  }
}
