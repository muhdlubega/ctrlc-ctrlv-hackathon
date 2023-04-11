import { useEffect, useState, useMemo } from 'react';
import { getGenreSortPopularity, getGenreSortAlphabetical, getGenreSortRating, getGenreSortMeta, getGenreSortRelease, getGenreSortDate} from '../../APIKey/APIKey';
import '../../Styles/main.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { GameItem } from '../../Typescript/MainTypescript';
import { SortMethod } from '../../Typescript/MainTypescript';
import { useFavoriteGames } from '../../States/FavoritesContext';


function GenreGames() {
  const [gamesArray, setGamesArray] = useState<GameItem[]>([]);
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<SortMethod>(SortMethod.Popularity);
  const [favorites, setFavorites] = useState<GameItem[]>([]); // new state for favorite games
  const { favoriteGames, addGameToFavorite, removeGameFromFavorite } = useFavoriteGames();

  const getGamesNames = useMemo(() => { //Sorting function
    switch (sortMethod) {
      case SortMethod.Popularity:
        return getGenreSortPopularity;
      case SortMethod.Alphabetical:
        return getGenreSortAlphabetical;
      case SortMethod.Rating:
        return getGenreSortRating;
      case SortMethod.Meta:
        return getGenreSortMeta;
      case SortMethod.Release:
        return getGenreSortRelease;
      case SortMethod.Date:
        return getGenreSortDate;
      default:
        return getGenreSortPopularity;
    }
  }, [sortMethod]);

  const fetchGames = () => { // Fetch data from API with a promise
    let promise = getGamesNames({ page: currentPage }, id!); 
    promise.then(output => {
      setGamesArray([...gamesArray, ...output?.data?.results])
    })
  }

  const handleLoadMore = () => { // Load more games
    setCurrentPage(currentPage + 1);
  }

  const handleSort = (sortMethod: SortMethod) => {
    setSortMethod(sortMethod);
    setGamesArray([]);
    setCurrentPage(1);
  }

  useEffect(() => {
    fetchGames();
  }, [getGamesNames]);

  useEffect(() => {
    const element = document.getElementById("details-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [])

  useEffect(() => {
    fetchGames();
  }, [currentPage]);

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
    <div>
      <div className='sort-group'>
      <select id='sort-select' className='sort-select' onChange={(event) => handleSort(SortMethod[event.target.value as keyof typeof SortMethod])}> {/*Sorting Options*/}
        <option value={''} disabled selected>Select Sorting Option</option>
        <option value={SortMethod.Popularity}>Popularity</option>
        <option value={SortMethod.Alphabetical}>Alphabetical</option>
        <option value={SortMethod.Rating}>User Rating</option>
        <option value={SortMethod.Meta}>Metacritic Score</option>
        <option value={SortMethod.Release}>Date Released</option>
        <option value={SortMethod.Date}>Date Created</option>
      </select>
    </div>
      <div className='content'> {/*Display Games*/}
        {gamesArray.map((game: GameItem) => ( 
          <div className='game-item' key={game?.name} onClick={()=>{navigate(`/details/${game.id}`)}}>
            <img className='game-image' alt={'game item'} src={game?.background_image}></img>
            <span className='game-span'>
                <span className='game-spantitle'>{game?.name}</span>
                <button className='fave-button' onClick={(e) => { e.stopPropagation(); handleFavorite(game); }}>
                  {getButtonText(game)}
                </button>
                </span>
          </div>
        ))}
      </div>
      <div className='load-more'><button className='button-resp' onClick={handleLoadMore}>Load More</button></div>
    </div>
  )
}

export default GenreGames;