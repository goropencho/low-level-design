import PlayingPiece from './playingPiece';

export default class Player {
  constructor(
    public name: string,
    public playingPiece: PlayingPiece
  ) {
    this.name = name;
    this.playingPiece = playingPiece;
  }

  public get getName(): string {
    return this.name;
  }

  public set setName(v: string) {
    this.name = v;
  }

  public get getPlayingPiece(): PlayingPiece {
    return this.playingPiece;
  }

  public set setPlayingPiece(playingPiece: PlayingPiece) {
    this.playingPiece = playingPiece;
  }
}
