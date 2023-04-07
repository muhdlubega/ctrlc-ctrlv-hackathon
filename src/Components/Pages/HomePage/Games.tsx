import { useEffect, useState } from 'react';
import { getSortPopularityHigh, getSortPopularityLow, getSortAlphabeticalHigh, getSortAlphabeticalLow, 
getSortRatingHigh, getSortRatingLow, getSortMetaHigh, getSortMetaLow,
getSortReleaseHigh, getSortReleaseLow, getSortDateHigh, getSortDateLow } from '../../APIKey/APIKey';
import '../../Styles/main.scss';
import { useNavigate } from 'react-router-dom';


interface GameItem {
  name: string;
  background_image: string;
  id: number;
}

enum SortMethod {
  PopularityHigh = 'PopularityHigh',
  PopularityLow = 'PopularityLow',
  AlphabeticalHigh = 'AlphabeticalHigh',
  AlphabeticalLow = 'AlphabeticalLow',
  RatingHigh = 'RatingHigh',
  RatingLow = 'RatingLow',
  MetaHigh = 'MetaHigh',
  MetaLow = 'MetaLow',
  ReleaseHigh = 'ReleaseHigh',
  ReleaseLow = 'ReleaseLow',
  DateHigh = 'DateHigh',
  DateLow = 'DateLow',
}

function Games() {
  const [gamesArray, setGamesArray] = useState<GameItem[]>([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<SortMethod>(SortMethod.PopularityHigh);

  const getGamesNames = () => {
    let promise;
    switch (sortMethod) {
      case SortMethod.PopularityHigh:
        promise = getSortPopularityHigh({ page: currentPage });
        break;
      case SortMethod.PopularityLow:
        promise = getSortPopularityLow({ page: currentPage });
        break;
      case SortMethod.AlphabeticalHigh:
        promise = getSortAlphabeticalHigh({ page: currentPage });
        break;
      case SortMethod.AlphabeticalLow:
        promise = getSortAlphabeticalLow({ page: currentPage });
        break;
      case SortMethod.RatingHigh:
        promise = getSortRatingHigh({ page: currentPage });
        break;
      case SortMethod.RatingLow:
        promise = getSortRatingLow({ page: currentPage });
        break;
      case SortMethod.MetaHigh:
        promise = getSortMetaHigh({ page: currentPage });
        break;
      case SortMethod.MetaLow:
        promise = getSortMetaLow({ page: currentPage });
        break;
      case SortMethod.ReleaseHigh:
        promise = getSortReleaseHigh({ page: currentPage });
        break;
      case SortMethod.ReleaseLow:
        promise = getSortReleaseLow({ page: currentPage });
        break;
      case SortMethod.DateHigh:
        promise = getSortDateHigh({ page: currentPage });
        break;
      case SortMethod.DateLow:
        promise = getSortDateLow({ page: currentPage });
        break;    
      default:
        promise = getSortPopularityHigh({ page: currentPage });
    }
    promise.then(output => {
      setGamesArray([...output?.data?.results])
    })
  }

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

  useEffect(() => {
    getGamesNames();
  }, [sortMethod]);

  return (
    <div>
      <div>
      <label htmlFor='sort-select' className='sort-text'>Sort by:</label>
      <select id='sort-select' className='sort-select' onChange={(event) => handleSort(SortMethod[event.target.value as keyof typeof SortMethod])}>
        <option value={SortMethod.PopularityHigh}>Popularity(desc)</option>
        <option value={SortMethod.PopularityLow}>Popularity(asc)</option>
        <option value={SortMethod.AlphabeticalHigh}>Name A-Z</option>
        <option value={SortMethod.AlphabeticalLow}>Name Z-A</option>
        <option value={SortMethod.RatingHigh}>Average Rating(desc)</option>
        <option value={SortMethod.RatingLow}>Average Rating(asc)</option>
        <option value={SortMethod.MetaHigh}>Metacritic Score(desc)</option>
        <option value={SortMethod.MetaLow}>Metacritic Score(asc)</option>
        <option value={SortMethod.ReleaseHigh}>Date Released(desc)</option>
        <option value={SortMethod.ReleaseLow}>Date Released(asc)</option>
        <option value={SortMethod.DateHigh}>Date Created(desc)</option>
        <option value={SortMethod.DateLow}>Date Created(asc)</option>
      </select>
    </div>
      <div className='content'>
        {gamesArray.map((game: GameItem) => ( //map your output
          <div className='game-item' key={game?.name} onClick={()=>{navigate(`/details/${game.id}`)}}>
            <img className='game-image' alt={'game item'} src={game?.background_image}></img>
            <div className='game-name'>{game?.name}</div>
          </div>
        ))}
      </div>
      <button className='load-button' onClick={handleLoadMore}>Load More</button>
    </div>
  )
}

export default Games
