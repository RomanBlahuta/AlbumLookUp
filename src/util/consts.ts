import {Genre} from './interfaces';

export const GENRES: Genre[] = [
  {name: 'Rock', apiName: 'rock', color: '#ec3f49'},
  {name: 'Electro', apiName: 'electro', color: '#9BF1E1'},
  {name: 'Hip-hop', apiName: 'hip-hop', color: '#F59E49'},
  {name: 'Pop', apiName: 'pop', color: '#C3F0C8'},
  {name: 'R&B', apiName: 'rnb', color: '#F25BA5'},
  {name: 'Indie', apiName: 'indie', color: '#4E6FF5'}
];

export const ICON_INACTIVE = 'favorite_border';
export const ICON_ACTIVE = 'favorite';
export const DEFAULT_ALBUM_COVER = '../../../assets/albumDefaultCover.jpg';
