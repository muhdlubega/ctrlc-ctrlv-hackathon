import axios from "axios";

type Query = {
  id?: number;
  page?: number;
  genre_id?: number;
  search?: string;
  rating?: number;
  store?: number;
  platform?: number;
  publisher?: number;
  developer?: number;
}

//API Keys for main functionalities
export const getGames = () => {
  return axios.get("https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=40");
}

export const getGamesPages = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=40&page=${page}`);
}


//API Keys for searching functionalities
export const getGamesSearch = ({search}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=20&search=${search}`);
}


//API Keys for filtering functionalities
export const getFilterRating = ({page,rating}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=40&page=${page}&metacritic=${rating}`);
}

export const getFilterStore = ({page,store}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=40&page=${page}&stores=${store}`);
}

export const getFilterPlatform = ({page,platform}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=40&page=${page}&platforms=${platform}`);
}

export const getFilterPublisher = ({page,publisher}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=40&page=${page}&publishers=${publisher}`);
}

export const getFilterDeveloper = ({page,developer}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=40&page=${page}&developers=${developer}`);
}


//API Keys for sorting functionalities
export const getSortAlphabeticalHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=-name&page=${page}&page_size=40`);
}

export const getSortAlphabeticalLow = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=name&page=${page}&page_size=40`);
}

export const getSortRatingHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=-rating&page=${page}&page_size=40`);
}

export const getSortRatingLow = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=rating&page=${page}&page_size=40`);
}

export const getSortMetaHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=-metacritic&page=${page}&page_size=40`);
}

export const getSortMetaLow = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=metacritic&page=${page}&page_size=40`);
}

export const getSortReleaseHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=-released&page=${page}&page_size=40`);
}

export const getSortReleaseLow = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=released&page=${page}&page_size=40`);
}

export const getSortDateHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=-created&page=${page}&page_size=40`);
}

export const getSortDateLow = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&ordering=created&page=${page}&page_size=40`);
}


//API Keys for game details endpoints
export const getGamesDetails = ({id}: Query) => {
  return axios.get(`https://api.rawg.io/api/games/${id}?key=bc29961cd2654dd9a9ce173f3fb160bc`);
}

export const getGamesAwards = ({id}: Query) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/achievements?key=bc29961cd2654dd9a9ce173f3fb160bc`);
}

export const getGamesTrailer = ({id}: Query) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/movies?key=bc29961cd2654dd9a9ce173f3fb160bc`);
}

export const getGamesAdditions = ({id}: Query) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/additions?key=bc29961cd2654dd9a9ce173f3fb160bc`);
}

export const getGamesStores = ({id}: Query) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/stores?key=bc29961cd2654dd9a9ce173f3fb160bc`);
}

export const getGamesComment = ({id}: Query) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/reddit?key=bc29961cd2654dd9a9ce173f3fb160bc`);
}

export const getGamesSuggestions = ({id}: Query) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/suggested?key=bc29961cd2654dd9a9ce173f3fb160bc`);
}


//API Keys for game genres
export const getGenres = () => {
  return axios.get("https://api.rawg.io/api/genres?key=bc29961cd2654dd9a9ce173f3fb160bc");
}

export const getGenreGames = ({page,genre_id}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=40&page=${page}&genres=${genre_id}`);
}


//API Keys for various uses
export const getStores = () => {
  return axios.get("https://api.rawg.io/api/stores?key=bc29961cd2654dd9a9ce173f3fb160bc");
}

export const getDevelopers = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/developers?key=bc29961cd2654dd9a9ce173f3fb160bc&page=${page}&page_size=40`);
}

export const getPublishers = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/publishers?key=bc29961cd2654dd9a9ce173f3fb160bc&page=${page}&page_size=40`);
}

export const getPlatforms = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/platforms?key=bc29961cd2654dd9a9ce173f3fb160bc&page=${page}&page_size=40`);
}