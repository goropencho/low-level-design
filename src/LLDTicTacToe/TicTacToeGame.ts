import Board from './model/board';
import PieceType from './model/enums/pieceType.enum';
import Player from './model/player';
import PlayingPieceX from './model/playingPieceO';
import PlayingPieceO from './model/playingPieceX';

import readline = require('readline-sync');

export default class TicTacToeGame {
  private players: Player[];
  private gameboard: Board;

  constructor(private boardSize: number = 3) {
    this.players = [];
    this.gameboard = new Board(this.boardSize);
    this.initalizeGame();
  }

  initalizeGame() {
    const XPiece = new PlayingPieceX();
    const player1 = new Player('Player1', XPiece);
    const OPiece = new PlayingPieceO();
    const player2 = new Player('Player2', OPiece);
    this.players.push(player1, player2);
  }

  public startGame() {
    let noWinner = true;
    while (noWinner) {
      const playerTurn = this.players.shift()!;

      this.gameboard.printBoard();
      const freePieces = this.gameboard.getFreeCells;
      if (freePieces.length === 0) {
        noWinner = false;
        continue;
      }

      console.log(`Player ${playerTurn?.name} Enter row,column: `);
      const input = readline.question(
        `Player ${playerTurn?.name} Enter row,column: `
      );
      if (input === '') {
        this.players.unshift(playerTurn);
        continue;
      }
      const [inputRow, inputColumn] = input.split(',').map(Number);

      const pieceAddedSuccessfully = this.gameboard.addPiece(
        inputRow,
        inputColumn,
        playerTurn.playingPiece
      );
      if (!pieceAddedSuccessfully) {
        console.log('Incorrect Position Chosen, try again');
        this.players.unshift(playerTurn);
        continue;
      }

      this.players.push(playerTurn);
      const winner = this.isThereWinner(
        inputRow,
        inputColumn,
        playerTurn.playingPiece.pieceType
      );
      if (winner) {
        return playerTurn.name;
      }
    }
    return 'Tie';
  }

  private isThereWinner(
    row: number,
    col: number,
    pieceType: PieceType
  ): boolean {
    return (
      this.checkRow(row, pieceType) ||
      this.checkCol(col, pieceType) ||
      this.checkDiagonal(pieceType) ||
      this.checkAntiDiagonal(pieceType)
    );
  }

  private checkRow(row: number, pieceType: PieceType): boolean {
    return this.gameboard.board[row].every(
      cell => cell?.pieceType === pieceType
    );
  }

  private checkCol(col: number, pieceType: PieceType): boolean {
    return this.gameboard.board.every(row => row[col]?.pieceType === pieceType);
  }

  private checkDiagonal(pieceType: PieceType): boolean {
    return this.gameboard.board.every(
      (row, index) => row[index]?.pieceType === pieceType
    );
  }

  private checkAntiDiagonal(pieceType: PieceType): boolean {
    return this.gameboard.board.every(
      (row, index) => row[this.boardSize - 1 - index]?.pieceType === pieceType
    );
  }
}
