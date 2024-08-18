import PieceType from './enums/pieceType.enum';

export default class PlayingPiece {
  constructor(public pieceType: PieceType) {
    this.pieceType = pieceType;
  }
}
