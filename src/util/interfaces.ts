export interface Genre {
  name: string;
  apiName: string;
  color: string;
}

export interface TopAlbumsResponse {
  albums: TopAlbums;
}

export interface SearchAlbumsResponse {
  results: SearchResults;
}

export interface SearchResults {
  albummatches: AlbumMatches;
  '@attr'?: any;
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
  '@attr'?: any;
  streamable?: string;
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

export interface AlbumMatches {
  album: Album[];
}
