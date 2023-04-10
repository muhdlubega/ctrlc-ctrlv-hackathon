import { useEffect, useState } from 'react';
import { getGenreSortPopularityHigh, getGenreSortAlphabeticalHigh, getGenreSortRatingHigh, getGenreSortMetaHigh, getGenreSortReleaseHigh, getGenreSortDateHigh} from '../../APIKey/APIKey';
import '../../Styles/main.scss';
import { useNavigate, useParams } from 'react-router-dom';
interface GameItem {
  name: string;
  background_image: string;
  id: number;
}

enum SortMethod {
  PopularityHigh = 'PopularityHigh',
  AlphabeticalHigh = 'AlphabeticalHigh',
  RatingHigh = 'RatingHigh',
  MetaHigh = 'MetaHigh',
  ReleaseHigh = 'ReleaseHigh',
  DateHigh = 'DateHigh',
}

function GenreGames() {
  const [gamesArray, setGamesArray] = useState<GameItem[]>([]);
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<SortMethod>(SortMethod.PopularityHigh);

  const getGamesNames = () => {
    let promise;
    switch (sortMethod) {
      case SortMethod.PopularityHigh:
        promise = getGenreSortPopularityHigh({ page: currentPage },id!);
        break;
      case SortMethod.AlphabeticalHigh:
        promise = getGenreSortAlphabeticalHigh({ page: currentPage },id!);
        break;
      case SortMethod.RatingHigh:
        promise = getGenreSortRatingHigh({ page: currentPage },id!);
        break;
      case SortMethod.MetaHigh:
        promise = getGenreSortMetaHigh({ page: currentPage },id!);
        break;
      case SortMethod.ReleaseHigh:
        promise = getGenreSortReleaseHigh({ page: currentPage },id!);
        break;
      case SortMethod.DateHigh:
        promise = getGenreSortDateHigh({ page: currentPage },id!);
        break;
      default:
        promise = getGenreSortPopularityHigh({ page: currentPage },id!);
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
    const element = document.getElementById("details-container");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  }, [sortMethod]);

  return (
    <div>
      <div id="details-container" className='sort-group'>
      <label htmlFor='sort-select' className='sort-text'>Sort by:</label>
      <select id='sort-select' className='sort-select' onChange={(event) => handleSort(SortMethod[event.target.value as keyof typeof SortMethod])}>
        <option value={SortMethod.PopularityHigh}>Popularity</option>
        <option value={SortMethod.AlphabeticalHigh}>Alphabetical</option>
        <option value={SortMethod.RatingHigh}>User Rating</option>
        <option value={SortMethod.MetaHigh}>Metacritic Score</option>
        <option value={SortMethod.ReleaseHigh}>Date Released</option>
        <option value={SortMethod.DateHigh}>Date Created</option>
      </select>
    </div>
      <div className='content'>
        {gamesArray.map((game: GameItem) => (
          <div className='game-item' key={game?.name} onClick={()=>{navigate(`/details/${game.id}`)}}>
            <img className='game-image' alt={'game item'} src={game?.background_image}></img>
            <div className='game-name'>{game?.name}</div>
          </div>
        ))}
      </div>
      <div className='load-more'><button className='button-resp' onClick={handleLoadMore}>Load More</button></div>
    </div>
  )
}

export default GenreGames
