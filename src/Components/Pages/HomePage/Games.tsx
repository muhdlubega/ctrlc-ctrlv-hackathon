

import { useEffect, useState } from 'react';
import { getGamesSearch,getSortPopularityHigh, getSortAlphabeticalHigh, getSortRatingHigh, getSortMetaHigh, getSortReleaseHigh, getSortDateHigh } from '../../APIKey/APIKey';
import '../../Styles/main.scss';
import { useNavigate } from 'react-router-dom';
import myGif from '../../../Assets/image/loading.gif';
import placeholder from '../../../Assets/image/placeholder.svg';

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

function Games() {
  const [gamesArray, setGamesArray] = useState<GameItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<SortMethod>(SortMethod.PopularityHigh);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const getGamesNames = () => {
    setLoading(true);
    let promise;
    switch (sortMethod) {
      case SortMethod.PopularityHigh:
        promise = getSortPopularityHigh({ page: currentPage });
        break;
      case SortMethod.AlphabeticalHigh:
        promise = getSortAlphabeticalHigh({ page: currentPage });
        break;
      case SortMethod.RatingHigh:
        promise = getSortRatingHigh({ page: currentPage });
        break;
      case SortMethod.MetaHigh:
        promise = getSortMetaHigh({ page: currentPage });
        break;
      case SortMethod.ReleaseHigh:
        promise = getSortReleaseHigh({ page: currentPage });
        break;
      case SortMethod.DateHigh:
        promise = getSortDateHigh({ page: currentPage });
        break;
      default:
        promise = getSortPopularityHigh({ page: currentPage });
    }
    promise.then(output => {
      setGamesArray([...output?.data?.results])
      setLoading(false);
    })
  }

  const getSearchItem = () => {
    getGamesSearch({ search: searchInput }).then((output) => {
      setSearchResults(output?.data?.results);
    });
  };

  const handleSearch = () => {
    getSearchItem();
    navigate(`/search/${searchInput}`);
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

  useEffect(() => {
    getGamesNames();
  }, [sortMethod]);

  return (
    
    <div>
      <div className='homepage-top'>
      <div className='sort-group'>
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
      </div>
      <div className='content'>
        {gamesArray.map((game: GameItem) => ( //map your output
        <div>
        {loading && <div><img style={{height:50, margin:20}} src={myGif} alt="Loading...." /></div>}
        {!loading &&
          <div className='game-item' key={game?.name} onClick={()=>{navigate(`/details/${game.id}`)}}>
            <img className='game-image' alt={'game item'} src={game?.background_image} onError={(e) => {
                              e.currentTarget.src = placeholder;
                            }}></img>
            <div className='game-name'>{game?.name}</div>
          </div>
          }
          </div>
        ))}
      </div>
      <div className='load-more'><button className='button-resp' onClick={handleLoadMore}>Load More</button></div>
    </div>

  )
}

export default Games

// import { useEffect, useState } from 'react';
// import { getGamesSearch,getSortPopularityHigh, getSortPopularityLow, getSortAlphabeticalHigh, getSortAlphabeticalLow, 
// getSortRatingHigh, getSortRatingLow, getSortMetaHigh, getSortMetaLow,
// getSortReleaseHigh, getSortReleaseLow, getSortDateHigh, getSortDateLow } from '../../APIKey/APIKey';
// import '../../Styles/main.scss';
// import { useNavigate } from 'react-router-dom';
// import myGif from '../../../Assets/image/loading.gif';

// interface GameItem {
//   name: string;
//   background_image: string;
//   id: number;
// }

// enum SortMethod {
//   PopularityHigh = 'PopularityHigh',
//   AlphabeticalHigh = 'AlphabeticalHigh',
//   RatingHigh = 'RatingHigh',
//   MetaHigh = 'MetaHigh',
//   ReleaseHigh = 'ReleaseHigh',
//   DateHigh = 'DateHigh',
// }

// function Games() {
//   const [gamesArray, setGamesArray] = useState<GameItem[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortMethod, setSortMethod] = useState<SortMethod>(SortMethod.PopularityHigh);
//   const [searchInput, setSearchInput] = useState("");
//   const [searchResults, setSearchResults] = useState<GameItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const navigate = useNavigate();

//   const getGamesNames = () => {
//     setLoading(true);
//     let promise;
//     switch (sortMethod) {
//       case SortMethod.PopularityHigh:
//         promise = getSortPopularityHigh({ page: currentPage });
//         break;
//       case SortMethod.AlphabeticalHigh:
//         promise = getSortAlphabeticalHigh({ page: currentPage });
//         break;
//       case SortMethod.RatingHigh:
//         promise = getSortRatingHigh({ page: currentPage });
//         break;
//       case SortMethod.MetaHigh:
//         promise = getSortMetaHigh({ page: currentPage });
//         break;
//       case SortMethod.ReleaseHigh:
//         promise = getSortReleaseHigh({ page: currentPage });
//         break;
//       case SortMethod.DateHigh:
//         promise = getSortDateHigh({ page: currentPage });
//         break;
//       default:
//         promise = getSortPopularityHigh({ page: currentPage });
//     }
//     promise.then(output => {
//       setGamesArray([...output?.data?.results])
//       setLoading(false);
//     })
//   }

//   const getSearchItem = () => {
//     getGamesSearch({ search: searchInput }).then((output) => {
//       setSearchResults(output?.data?.results);
//     });
//   };

//   const handleSearch = () => {
//     getSearchItem();
//     navigate(`/search/${searchInput}`);
//   };

//   const handleLoadMore = () => {
//     setCurrentPage(currentPage + 1);
//     getGamesNames();
//   }

//   const handleSort = (sortMethod: SortMethod) => {
//     setSortMethod(sortMethod);
//     setGamesArray([]);
//     setCurrentPage(1);
//     getGamesNames();

//   useEffect(() => {
//     getGamesNames();
//   }, [sortMethod]);

//   return (
    
//     <div>
//       <div className='homepage-top'>
//       <div className='sort-group'>
//       <label htmlFor='sort-select' className='sort-text'>Sort by:</label>
//       <select id='sort-select' className='sort-select' onChange={(event) => handleSort(SortMethod[event.target.value as keyof typeof SortMethod])}>
//         <option value={SortMethod.PopularityHigh}>Popularity</option>
//         <option value={SortMethod.AlphabeticalHigh}>Alphabetical</option>
//         <option value={SortMethod.RatingHigh}>User Rating</option>
//         <option value={SortMethod.MetaHigh}>Metacritic Score</option>
//         <option value={SortMethod.ReleaseHigh}>Date Released</option>
//         <option value={SortMethod.DateHigh}>Date Created</option>
//       </select>
//     </div>
//     <div className="game-list-container">
//       <div className="search-container">
//         <input
//           type="text"
//           value={searchInput}
//           onChange={(event) => setSearchInput(event.target.value)}
//           placeholder="Search for games..."
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//     </div>
//       </div>
//       <div className='content'>
//         {gamesArray.map((game: GameItem) => ( //map your output
//         <div>
//         {loading && <div><img style={{height:50, margin:20}} src={myGif} alt="Loading...." /></div>}
//         {!loading &&
//           <div className='game-item' key={game?.name} onClick={()=>{navigate(`/details/${game.id}`)}}>
//             <img className='game-image' alt={'game item'} src={game?.background_image}></img>
//             <div className='game-name'>{game?.name}</div>
//           </div>
//           }
//           </div>
//         ))}
//       </div>
//       <div className='load-more'><button className='button-resp' onClick={handleLoadMore}>Load More</button></div>
//     </div>

//   )
// }
// }

// export default Games