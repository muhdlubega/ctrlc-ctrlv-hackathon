import axios from "axios";

// export type Id = {
//   id: number;
// }

// export type GenreId = {
// genre_id: number
// }

export type Query = {
  page?: number;
  search?: string;
  platform?: number;
}

//API Keys for searching functionalities
export const getGamesSearch = ({search}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&page_size=40&search=${search}`);
}


//API Keys for filtering functionalities
export const getFilterPlatform = ({page,platform}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&page_size=40&page=${page}&platforms=${platform}`);
}

//API Keys for sorting functionalities
export const getSortPopularityHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-popularity&page=${page}&page_size=40`);
}

export const getSortAlphabeticalHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-name&page=${page}&page_size=40`);
}
export const getSortRatingHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-rating&page=${page}&page_size=40`);
}

export const getSortMetaHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-metacritic&page=${page}&page_size=40`);
}

export const getSortReleaseHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-released&page=${page}&page_size=40`);
}

export const getSortDateHigh = ({page}: Query) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-created&page=${page}&page_size=40`);
}

//API Keys for game details endpoints
export const getGamesDetails = (id: string) => {
  return axios.get(`https://api.rawg.io/api/games/${id}?key=bf4ec562d6994c3481633dc1fddab06b`);
}

export const getGamesAwards = (id: string) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/achievements?key=bf4ec562d6994c3481633dc1fddab06b`);
}

export const getGamesTrailer = (id: string) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/movies?key=bf4ec562d6994c3481633dc1fddab06b`);
}

export const getGamesAdditions = (id: string) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/additions?key=bf4ec562d6994c3481633dc1fddab06b`);
}

export const getGamesStores = (id: string) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/stores?key=bf4ec562d6994c3481633dc1fddab06b`);
}

export const getGamesScreenshots = (id: string) => {
  return axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=bf4ec562d6994c3481633dc1fddab06b`);
}


//API Keys for game genres
export const getGenres = () => {
  return axios.get("https://api.rawg.io/api/genres?key=bf4ec562d6994c3481633dc1fddab06b");
}

export const getGenreSortPopularityHigh = ({page}: Query, id:string) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-popularity&page=${page}&page_size=40&genres=${id}`);
}

export const getGenreSortAlphabeticalHigh = ({page}: Query, id:string) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-name&page=${page}&page_size=40&genres=${id}`);
}

export const getGenreSortRatingHigh = ({page}: Query, id:string) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-rating&page=${page}&page_size=40&genres=${id}`);
}

export const getGenreSortMetaHigh = ({page}: Query, id:string) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-metacritic&page=${page}&page_size=40&genres=${id}`);
}

export const getGenreSortReleaseHigh = ({page}: Query, id:string) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-released&page=${page}&page_size=40&genres=${id}`);
}

export const getGenreSortDateHigh = ({page}: Query, id:string) => {
  return axios.get(`https://api.rawg.io/api/games?key=bf4ec562d6994c3481633dc1fddab06b&ordering=-created&page=${page}&page_size=40&genres=${id}`);
}
