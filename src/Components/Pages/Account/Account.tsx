import { useState } from 'react';
import { useFavoriteGames } from '../../States/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { getGamesSearch} from '../../APIKey/APIKey';
  
interface GameItem {
  name: string;
  background_image: string;
  id: number;
}

  function FavoriteGames() {
    const { favoriteGames } = useFavoriteGames();

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<GameItem[]>([]);
  const navigate = useNavigate();

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
  
    return (
      <div>
        <h2 className="details-title">Favorite Games</h2>
          <div className='content'>
        <ul>
        <div className='game-item'>
          {favoriteGames.map((gameTitle) => (
            <li className="details-title" key={gameTitle}>{gameTitle}</li>
          ))}
          </div>
        </ul></div>
        <div className="search">
    <div>
      <input value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)} onKeyDown={handleSearch}
          type="text" placeholder="Search Game Info . . ." required/>
    </div>
  </div><br></br>
      </div>
    );
  }

export default FavoriteGames;
