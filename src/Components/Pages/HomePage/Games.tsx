import { useEffect, useState } from 'react';
import { getGames } from '../../APIKey/APIKey';
import '../../Styles/main.scss';
import { useNavigate } from 'react-router-dom';

interface GameItem {
  name: string;
  background_image: string;
  id: number;
}

function Games() {
  const [gamesArray, setGamesArray] = useState([]);
  const navigate = useNavigate();

  const getGamesNames = () => {
    getGames().then(output => {setGamesArray(output?.data?.results)})
  }

  useEffect(() => {
    getGamesNames();
  }, []);

  return (
    <div>
      <div className='content'>
        {gamesArray.map((game: GameItem) => (
          <div className='game-item' key={game?.name} onClick={()=>{navigate(`/details/${game.id}`)}}>
            <img className='game-image' alt={'game image'} src={game?.background_image}></img>
            <div className='game-name'>{game?.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Games