export const composeRequestUrl = (genre: string, apiKey: string): string => {
  return `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${apiKey}&format=json`;
};
