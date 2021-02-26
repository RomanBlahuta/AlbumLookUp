export interface Genre {
  name: string;
  apiName: string;
  color: string;
}

export interface TopAlbumsResponse {
  albums: TopAlbums;
}

export interface TopAlbums {
  album: Album[];
  '@attr': any;
}

export interface Album {
  name: string;
  mbid: string;
  url: string;
  artist: Artist;
  image: Image[];
  '@attr': any;
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
}

export interface Image {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge';
}

