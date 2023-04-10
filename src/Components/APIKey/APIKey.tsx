import axios from "axios";

export type Query = {
  page?: number;
  search?: string;
  platform?: number;
}

const BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = "012299a1f3f64ced87ec0b4bef924ccc";
const PAGE_SIZE = 40;

//API Keys for searching functionalities
export const getGamesSearch = ({search}: Query) => {
  return axios.get(`${BASE_URL}?key=${API_KEY}&page_size=${PAGE_SIZE}&search=${search}`);
}

// //API Keys for filtering functionalities
// export const getFilterPlatform = ({page,platform}: Query) => {
//   return axios.get(`${BASE_URL}?key=${API_KEY}&page_size=${PAGE_SIZE}&page=${page}&platforms=${platform}`);
// }

//API Keys for sorting functionalities
const getSortEndpoint = (ordering: string) => ({ page }: Query) =>
  axios.get(`${BASE_URL}?key=${API_KEY}&ordering=${ordering}&page=${page}&page_size=${PAGE_SIZE}`);

export const getSortPopularityHigh = getSortEndpoint("-popularity");
export const getSortAlphabeticalHigh = getSortEndpoint("-name");
export const getSortRatingHigh = getSortEndpoint("-rating");
export const getSortMetaHigh = getSortEndpoint("-metacritic");
export const getSortReleaseHigh = getSortEndpoint("-released");
export const getSortDateHigh = getSortEndpoint("-created");

//API Keys for game details endpoints
export const getGamesDetails = (id: string) => {
  return axios.get(`${BASE_URL}/${id}?key=${API_KEY}`);
}

export const getGamesTrailer = (id: string) => {
  return axios.get(`${BASE_URL}/${id}/movies?key=${API_KEY}`);
}

export const getGamesAdditions = (id: string) => {
  return axios.get(`${BASE_URL}/${id}/additions?key=${API_KEY}`);
}

export const getGamesStores = (id: string) => {
  return axios.get(`${BASE_URL}/${id}/stores?key=${API_KEY}`);
}

export const getGamesScreenshots = (id: string) => {
  return axios.get(`${BASE_URL}/${id}/screenshots?key=${API_KEY}`);
}


//API Keys for game genres
export const getGenres = () => {
  return axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
}

const getGenreSortEndpoint = (ordering: string) => ({ page }: Query, id: string) =>
  axios.get(`${BASE_URL}?key=${API_KEY}&ordering=${ordering}&page=${page}&page_size=${PAGE_SIZE}&genres=${id}`);

export const getGenreSortPopularityHigh = getGenreSortEndpoint("-popularity");
export const getGenreSortAlphabeticalHigh = getGenreSortEndpoint("-name");
export const getGenreSortRatingHigh = getGenreSortEndpoint("-rating");
export const getGenreSortMetaHigh = getGenreSortEndpoint("-metacritic");
export const getGenreSortReleaseHigh = getGenreSortEndpoint("-released");
export const getGenreSortDateHigh = getGenreSortEndpoint("-created");
