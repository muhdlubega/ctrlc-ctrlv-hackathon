import { getGamesDetails } from "../../APIKey/APIKey";
import "../../Styles/main.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Id } from "../../APIKey/APIKey";

// interface GameDetails {
//   name?: { id: string }[];
//   metacritic?: { id: number };
//   ratings?: { id: string };
//   esrb?: { id: string };
//   genres?: { id: string };
//   released?: { id: string };
//   playtime?: { id: string };
//   description?: { id: string };
// }

interface GameDetails {
  name?: string;
  metacritic?: number;
  ratings?: string;
  esrb?: string;
  genres?: string;
  released?: string;
  playtime?: string;
  description?: string;
}

function Details() {
  const [gameDetails, setGameDetails] = useState<GameDetails>({});
  const { id } = useParams<{ id: string }>();

  const GameData = (id: string | undefined) => {
    if (id) {
      const gameId: Id = { id: parseInt(id) };
      getGamesDetails(gameId).then((output) => {
        setGameDetails(output?.data?.results);
      });
    }
  };
  

  useEffect(() => {
    GameData(id);
  }, [id]);

  return (
    <div>
      <div>Game Details</div>
      <table className="text">
        <tbody>
          <tr>
            <th>Title</th>
            <td>{gameDetails?.name}</td>
          </tr>
          <tr>
            <th>Metacritic</th>
            <td>{gameDetails?.metacritic}</td>
          </tr>
          <tr>
            <th>Ratings</th>
            <td>{gameDetails?.ratings}</td>
          </tr>
          <tr>
            <th>Esrb</th>
            <td>{gameDetails?.esrb}</td>
          </tr>
          <tr>
            <th>Genres</th>
            <td>{gameDetails?.genres}</td>
          </tr>
          <tr>
            <th>Released</th>
            <td>{gameDetails?.released}</td>
          </tr>
          <tr>
            <th>Playtime</th>
            <td>{gameDetails?.playtime}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{gameDetails?.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
