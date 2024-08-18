import PlayingPiece from './playingPiece';

export default class Board {
  public board: (PlayingPiece | null)[][];
  constructor(public size: number) {
    this.board = Array(size)
      .fill(null)
      .map(() => Array(size).fill(null));
  }

  public addPiece(row: number, column: number, playingPiece: PlayingPiece) {
    if (this.board[row][column] !== null) {
      return false;
    }
    this.board[row][column] = playingPiece;
    return true;
  }

  public get getFreeCells() {
    const freeCells = [];
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.board[i][j] === null) {
          freeCells.push([i, j]);
        }
      }
    }
    return freeCells;
  }

  public printBoard(): void {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.board[i][j] !== null) {
          process.stdout.write(this.board[i][j]!.pieceType.toString() + ' ');
        } else {
          process.stdout.write('  ');
        }
        process.stdout.write('| ');
      }
      console.log();
    }
  }
}
