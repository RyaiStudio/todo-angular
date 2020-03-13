export class Song {
  id: string;
  imgUrl: string;
  album: string;
  artist: string;
  release: string;
  genres: Array<string>;
}

export class Tab {
  id: string;
  isActive: boolean;
  icon: string;
  label: string;
  target: string;
}
export class UtlFormInput {
  label: string;
  inputId: string;
  value: string;
}
