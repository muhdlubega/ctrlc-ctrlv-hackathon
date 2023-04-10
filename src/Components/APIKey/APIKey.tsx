import axios from "axios";
import {Query} from "../Typescript/MainTypescript";

const BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = "fbbc96143c8c424d9df2dd99d9746068";
const PAGE_SIZE = 40;

//API Keys for searching functionalities
export const getGamesSearch = ({search}: Query) => {
  return axios.get(`${BASE_URL}?key=${API_KEY}&page_size=${PAGE_SIZE}&search=${search}`);
}

//API Keys for sorting functionalities
const getSortEndpoint = (ordering: string) => ({ page }: Query) =>
  axios.get(`${BASE_URL}?key=${API_KEY}&ordering=${ordering}&page=${page}&page_size=${PAGE_SIZE}`);

export const getSortPopularity = getSortEndpoint("-popularity");
export const getSortAlphabetical = getSortEndpoint("-name");
export const getSortRating = getSortEndpoint("-rating");
export const getSortMeta = getSortEndpoint("-metacritic");
export const getSortRelease = getSortEndpoint("-released");
export const getSortDate = getSortEndpoint("-created");

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

export const getGenreSortPopularity = getGenreSortEndpoint("-popularity");
export const getGenreSortAlphabetical = getGenreSortEndpoint("-name");
export const getGenreSortRating = getGenreSortEndpoint("-rating");
export const getGenreSortMeta = getGenreSortEndpoint("-metacritic");
export const getGenreSortRelease = getGenreSortEndpoint("-released");
export const getGenreSortDate = getGenreSortEndpoint("-created");