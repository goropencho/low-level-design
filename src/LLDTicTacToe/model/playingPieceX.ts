import PieceType from './enums/pieceType.enum';
import PlayingPiece from './playingPiece';

export default class PlayingPieceO extends PlayingPiece {
  constructor() {
    super(PieceType.O);
  }
}
