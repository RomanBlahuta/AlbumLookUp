export const composeGenreAlbumsRequestUrl = (genre: string, apiKey: string): string => {
  return `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${apiKey}&format=json`;
};

export const composeSearchRequestUrl = (albumName: string, apiKey: string): string => {
  return `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumName}&api_key=${apiKey}&format=json`;
};

export const composeAlbumInfoUrl = (albumName: string, artist: string, apiKey: string): string => {
  return `http://ws.audioscrobbler.com/2.0/?method=album.gettoptags&artist=${artist}&album=${albumName}&api_key=${apiKey}&format=json`;
};
