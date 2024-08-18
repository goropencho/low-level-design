import PieceType from './enums/pieceType.enum';
import PlayingPiece from './playingPiece';

export default class PlayingPieceX extends PlayingPiece {
  constructor() {
    super(PieceType.X);
  }
}
