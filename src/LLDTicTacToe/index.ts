import TicTacToeGame from './TicTacToeGame';

function main() {
  console.log('Game starts here');
  const game = new TicTacToeGame();
  game.initalizeGame();
  console.log('game winner is: ', game.startGame());
}

main();
