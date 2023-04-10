import React, {ReactNode} from 'react'

export type Query = { //exporting type Query to APIKey.tsx
  page?: number;
  search?: string;
  platform?: number;
}

export type Props = { //exporting type Props to AppWrapper.tsx, Layout.tsx
  children: ReactNode;
}

// Define types for props
export interface LoginProps { //exporting type LoginProps to AuthModal.tsx
  handleClose: () => void;
}

export interface RegisterProps { //exporting type RegisterProps to AuthModal.tsx
  handleClose: () => void;
}

export interface GameDetails { //exporting type GameDetails to Details.tsx
  name?: string;
  metacritic?: number;
  rating?: number;
  ratings?:{
    title?:string;
    percent?:number;
  }[];
  esrb_rating?: {name:string};
  website?: string;
  reddit_url?: string;
  genres?: {name:string, id:number}[];
  developers?: {name:string, id:number}[];
  publishers?: {name:string, id:number}[];
  released?: string;
  playtime?: string;
  description?: string;
  background_image?: string;
  max?: string;
  data: {
    max?: number;
  };
  platforms?: {
    platform?: {
      name: string;
    };
    requirements: {
      minimum?:string;
    recommended?:string
  };
  }[];
  gameTrailers?: {
    results?: {
      data?: {
        max?: string;
      };
    }[];
  };
  gameAdditions?: {
    results?: {
      background_image?: string;
      name?: string;
    }[];
  };
  gameStores?: {
    results?: {
      id?: number;
      url?: string;
    }[];
  };
  gameScreenshots: {
    results: {
      id?: number;
      image?: string;
    }[];
  };
}

export interface PercentageWheelProps { //exporting type PercentageWheelProps to Metacritic.tsx
  percentage: number;
}

export interface GameItem { //exporting type GameItem to GenreGames.tsx
  name: string;
  background_image: string;
  id: number;
}

export enum SortMethod { //exporting SortMethod to GenreGames.tsx
  Popularity = 'Popularity',
  Alphabetical = 'Alphabetical',
  Rating = 'Rating',
  Meta = 'Meta',
  Release = 'Release',
  Date = 'Date',
}

export interface Genre { //exporting Genre to Genres.tsx
  id: number;
  name: string;
}






const MainTypescript = () => {
  return (
    <div>MainTypescript</div>
  )
}

export default MainTypescript