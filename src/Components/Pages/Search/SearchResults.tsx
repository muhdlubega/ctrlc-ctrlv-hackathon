import { useNavigate, useParams } from 'react-router-dom';
import { getGamesSearch } from '../../APIKey/APIKey';
import '../../Styles/main.scss';
import { useEffect, useState } from 'react';
import { GameItem } from '../../Typescript/MainTypescript';
import { useFavoriteGames } from '../../States/FavoritesContext';

const SearchResults = () => {
  const { searchQuery } = useParams<{ searchQuery: string }>();
  const [searchResults, setSearchResults] = useState<GameItem[]>([]);
  const [favorites, setFavorites] = useState<GameItem[]>([]); // new state for favorite games
  const { favoriteGames, addGameToFavorite, removeGameFromFavorite } = useFavoriteGames();
  const navigate = useNavigate();

  useEffect(() => { // Fetch game search results whenever the 'searchQuery' parameter changes in the URL
    getGamesNames();
  }, [searchQuery]);

  useEffect(() => {
    const element = document.getElementById("details-container");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  }, [])

  const getGamesNames = () => {
    getGamesSearch({ search: searchQuery }).then((output) => {
      setSearchResults(output?.data?.results);
    });
  };

  const handleFavorite = (game: GameItem) => {
    const gameTitle = game.name;
  
    if (favoriteGames.includes(gameTitle)) {
      removeGameFromFavorite(gameTitle);
    } else {
      addGameToFavorite(gameTitle);
    }
  };
  
  const getButtonText = (game: GameItem) => {
    const gameTitle = game.name;
    return favoriteGames.includes(gameTitle) ? '❤️' : '♡';
  };

  return (
    <div className="game-name">
      <div  id='details-container' className="details-title">Showing results for "{searchQuery}"</div>

      <div className="content">
        {searchResults.map((game: GameItem) => (
          <div
            className="game-item"
            key={game?.name}
            onClick={() => navigate(`/details/${game.id}`)}
          >
            <img
              className="game-image"
              alt={"game results"}
              src={game?.background_image}
            ></img>
            <span className='game-span'>
                <span className='game-spantitle'>{game?.name}</span>
                <button className='fave-button' onClick={(e) => { e.stopPropagation(); handleFavorite(game); }}>
                  {getButtonText(game)}
                </button>
                </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
