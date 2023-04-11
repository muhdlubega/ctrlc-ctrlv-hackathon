import { useEffect, useState, useMemo } from 'react';
import { getGamesSearch,getSortPopularity, getSortAlphabetical, getSortRating, getSortMeta, getSortRelease, getSortDate } from '../../APIKey/APIKey';
import '../../Styles/main.scss';
import { useNavigate } from 'react-router-dom';
import myGif from '../../../Assets/image/loading.gif';
import placeholder from '../../../Assets/image/placeholder.svg';
import { useFavoriteGames } from '../../States/FavoritesContext';
import 'firebase/auth';
import 'firebase/firestore';
import { GameItem } from '../../Typescript/MainTypescript';
import { SortMethod } from '../../Typescript/MainTypescript';

function Games() {
  const [gamesArray, setGamesArray] = useState<GameItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<SortMethod>(SortMethod.Popularity);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<GameItem[]>([]); // new state for favorite games
  const { favoriteGames, addGameToFavorite, removeGameFromFavorite } = useFavoriteGames();

  const sortedGames = useMemo(() => {
    switch (sortMethod) {
      case SortMethod.Popularity:
        return getSortPopularity({ page: currentPage });
      case SortMethod.Alphabetical:
        return getSortAlphabetical({ page: currentPage });
      case SortMethod.Rating:
        return getSortRating({ page: currentPage });
      case SortMethod.Meta:
        return getSortMeta({ page: currentPage });
      case SortMethod.Release:
        return getSortRelease({ page: currentPage });
      case SortMethod.Date:
        return getSortDate({ page: currentPage });
      default:
        return getSortPopularity({ page: currentPage });
    }
  }, [currentPage, sortMethod]);

  const getGamesNames = () => {
    setLoading(true);
    sortedGames.then(output => {
      setGamesArray([...gamesArray, ...output?.data?.results])
      setLoading(false);
    })
  }


  const getSearchItem = () => {
    getGamesSearch({ search: searchInput }).then((output) => {
      setSearchResults(output?.data?.results);
    });
  };

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getSearchItem();
    navigate(`/search/${searchInput}`);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
    getGamesNames();
  }

  const handleSort = (sortMethod: SortMethod) => {
    setSortMethod(sortMethod);
    setGamesArray([]);
    setCurrentPage(1);
    getGamesNames();
  }

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
  
  
  useEffect(() => {
    getGamesNames();
  }, [sortMethod]);

  return (
    <div>
      <div className='homepage-top'>
      <div className='sort-group'>
      <select id='sort-select' className='sort-select' onChange={(event) => handleSort(SortMethod[event.target.value as keyof typeof SortMethod])}>
        <option value={''} disabled selected>Select Sorting Option</option>
        <option value={SortMethod.Popularity}>Popularity</option>
        <option value={SortMethod.Alphabetical}>Alphabetical</option>
        <option value={SortMethod.Rating}>User Rating</option>
        <option value={SortMethod.Meta}>Metacritic Score</option>
        <option value={SortMethod.Release}>Date Released</option>
        <option value={SortMethod.Date}>Date Created</option>
      </select>
    </div>
    <div className="game-list-container">
    <div className="flexbox">
  <div className="search">
    <div>
      <input value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)} onKeyDown={handleSearch}
          type="text" placeholder="Search . . ." required/>
    </div>
  </div>
</div>
    </div>
      </div>
      <div className='content'>
        {gamesArray.map((game: GameItem) => (
          <div>
            {loading && (
              <div>
                <img style={{ height: 50, margin: 20 }} src={myGif} alt='Loading....' />
              </div>
            )}
            {!loading && (
              <div className='game-item' key={game?.name} onClick={() => navigate(`/details/${game.id}`)}>
                <img
                  className='game-image'
                  alt={'game item'}
                  src={game?.background_image}
                  onError={(e) => {
                    e.currentTarget.src = placeholder;
                  }}
                ></img>
                <span className='game-span'>
                <span className='game-spantitle'>{game?.name}</span>
                <button className='fave-button' onClick={(e) => { e.stopPropagation(); handleFavorite(game); }}>
                  {getButtonText(game)}
                </button>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='load-more'>
        <button className='button-resp' onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default Games
