import { getGamesAdditions, getGamesComment, getGamesDetails, getGamesStores, getGamesSuggestions, getGamesTrailer } from "../../APIKey/APIKey";
import "../../Styles/main.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Id } from "../../APIKey/APIKey";

interface GameDetails {
  name?: string;
  metacritic?: number;
  rating?: number;
  esrb_rating?: {name:string};
  genres?: {name:string}[];
  released?: string;
  playtime?: string;
  description?: string;
  background_image?: string;
  max?: string;
  data:{max?: number;};
}

function Details() {
  const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);
  const [gameTrailers, setGameTrailers] = useState<GameDetails | null>(null);
  const [gameAdditions, setGameAdditions] = useState<GameDetails | null>(null);
  const [gameStores, setGameStores] = useState<GameDetails | null>(null);
  const [gameComment, setGameComment] = useState<GameDetails | null>(null);
  const [gameSuggestions, setGameSuggestions] = useState<GameDetails | null>(null);
  const { id } = useParams<{ id: string }>();

  const fetchGameData = async () => {
    try {
      const response = await getGamesDetails(id!);
      setGameDetails(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchGameData1 = async () => {
    try {
      const response1 = await getGamesTrailer(id!);
      setGameTrailers(response1?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchGameData2 = async () => {
    try {
      const response2 = await getGamesAdditions(id!);
      setGameAdditions(response2?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchGameData3 = async () => {
    try {
      const response3 = await getGamesStores(id!);
      setGameStores(response3?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchGameData4 = async () => {
    try {
      const response3 = await getGamesComment(id!);
      setGameComment(response3?.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchGameData5 = async () => {
    try {
      const response3 = await getGamesSuggestions(id!);
      setGameSuggestions(response3?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGameData();
    fetchGameData1();
    fetchGameData2();
    fetchGameData3();
    fetchGameData4();
    fetchGameData5();
  }, []);

  return (
    <div>
      <div>Game Details</div>
      <table className="game-name">
        <thead><img style={{height: 100}} src={gameDetails?.background_image} alt="Game Background"/></thead>
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
            <td>{gameDetails?.rating}</td>
          </tr>
          <tr>
            <th>Esrb</th>
            <td>{gameDetails?.esrb_rating?.name}</td>
          </tr>
          <tr>
            <th>Genres</th>
            <td>{gameDetails?.genres?.[0]?.name}</td>
          </tr>
          <tr>
            <th>Released</th>
            <td>{gameDetails?.released}</td>
          </tr>
          <tr>
            <th>Playtime</th>
            <td>{gameDetails?.playtime} hours</td>
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
