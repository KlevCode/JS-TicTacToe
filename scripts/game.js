function startNewGame() {
  if (players[0].name === '' || players[1].name === ''){
    alert('Bitte Namen für beide Spieler eingeben!');
    return;
  }

  gameAreaElement.style.display = 'block';
}
