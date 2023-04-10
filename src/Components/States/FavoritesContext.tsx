import { createContext, useContext, useState } from 'react';

interface Game {
  id: number;
  name: string;
  backgroundImage: string;
}

interface FavoriteGamesContextValue {
  favoriteGames: string[];
  addGameToFavorite: (game: string) => void;
  removeGameFromFavorite: (game: string) => void;
}

const FavoriteGamesContext = createContext<FavoriteGamesContextValue>({
  favoriteGames: [],
  addGameToFavorite: () => {},
  removeGameFromFavorite: () => {},
});

export function useFavoriteGames() {
  return useContext(FavoriteGamesContext);
}

export function FavoriteGamesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteGames, setFavoriteGames] = useState<string[]>([]);

  function addGameToFavorite(game: string) {
    setFavoriteGames((prevFavoriteGames) => [...prevFavoriteGames, game]);
  }

  function removeGameFromFavorite(game: string) {
    setFavoriteGames((prevFavoriteGames) => prevFavoriteGames.filter((g) => g !== game));
  }

  const value: FavoriteGamesContextValue = {
    favoriteGames,
    addGameToFavorite,
    removeGameFromFavorite,
  };

  return <FavoriteGamesContext.Provider value={value}>{children}</FavoriteGamesContext.Provider>;
}
