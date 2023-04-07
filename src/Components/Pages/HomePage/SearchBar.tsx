import { useState } from 'react';
import { getGamesSearch } from '../../APIKey/APIKey';
import '../../Styles/main.scss';
import { useNavigate } from 'react-router-dom';

export interface GameItem {
  id: string;
  name: string;
  background_image: string;
}

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<GameItem[]>([]);
  const navigate = useNavigate();

  const getSearchItem = () => {
    getGamesSearch({ search: searchInput }).then((output) => {
      setSearchResults(output?.data?.results);
    });
  };

  const handleSearch = () => {
    getSearchItem();
    navigate(`/search/${searchInput}`);
  };

  return (
    <div className="game-list-container">
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Search for games..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );

};

export default SearchBar;
