import { useState, useEffect } from 'react';
import { useFavoriteGames } from '../../States/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { getGamesSearch} from '../../APIKey/APIKey';
import { GameItem } from '../../Typescript/MainTypescript';
import { auth } from '../../../firebase';
import { User, onAuthStateChanged } from 'firebase/auth';

function FavoriteGames() {
  const { favoriteGames } = useFavoriteGames();
  const [authUser, setAuthUser] = useState<User | null>(null);
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!authUser) {
    return <h3 className='details-title'>Please login to access the favorites page</h3>;
  }

  return (
    <div>
      <div className='favorites-user'>
        {authUser ? (
          <>
            <h3>{`Signed In as ${authUser.email}`}</h3>
          </>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
      <h2 className="details-title">Favorite Games</h2>
      <div className='content'>
        <ul>
          <div className='game-item'>
            {favoriteGames.map((gameTitle) => (
              <li className="details-title" key={gameTitle}>{gameTitle}</li>
            ))}
          </div>
        </ul>
      </div>
      <div className="search">
        <div>
          <input value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)} onKeyDown={handleSearch}
            type="text" placeholder="Search Game Info . . ." required/>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default FavoriteGames;
