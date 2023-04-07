import { getGamesAdditions, getGamesScreenshots, getGamesDetails, getGamesStores, getGamesTrailer } from "../../APIKey/APIKey";
import "../../Styles/main.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Id } from "../../APIKey/APIKey";
import PercentageWheel from "./Metacritic";
import ratingToStars from "./UserRatings";

interface GameDetails {
  name?: string;
  metacritic?: number;
  rating?: number;
  esrb_rating?: {name:string};
  genres?: {name:string, id:number}[];
  developers?: {name:string, id:number}[];
  publishers?: {name:string, id:number}[];
  released?: string;
  playtime?: string;
  description?: string;
  background_image?: string;
  max?: string;
  data: {
    max?: number;
  };
  gameTrailers?: {
    results?: {
      data?: {
        max?: string;
      };
    }[];
  };
  gameAdditions?: {
    results?: {
      background_image?: string;
      name?: string;
    }[];
  };
  gameStores?: {
    results?: {
      id?: number;
      url?: string;
    }[];
  };
  gameScreenshots?: {
    results?: {
      id?: number;
      image?: string;
    }[];
  };
}

function Details() {
  const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);
  const [gameTrailers, setGameTrailers] = useState<GameDetails["gameTrailers"]  | null>(null);
  const [gameAdditions, setGameAdditions] = useState<GameDetails["gameAdditions"] | null>(null);
  const [gameStores, setGameStores] = useState<GameDetails["gameStores"] | null>(null);
  const [gameScreenshots, setGameScreenshots] = useState<GameDetails["gameScreenshots"] | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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
      const response3 = await getGamesScreenshots(id!);
      setGameScreenshots(response3?.data);
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
  }, []);



  return (
    <div>
      <table>
        <tr>
          <div className="details-title">{gameDetails?.name}</div>
        </tr>
        <tr>
          <table>
            <tr>
              <th>
                <tr>
                  <img className="details-image" src={gameDetails?.background_image} alt="Game Background"/>
                </tr>
                <tr>
                  <div>
                    {gameTrailers && gameTrailers?.results && gameTrailers?.results.length > 0 && (
                      <video style={{height: 300}} controls autoPlay muted>
                        <source src={gameTrailers?.results[0]?.data?.max} type="video/mp4" />
                      </video>
                    )}
                    {gameScreenshots && gameScreenshots.results && (
                      <div className="details-sc-container">
                        <ul className="details-sc-list">
                          {gameScreenshots.results.map((screenshot) => (
                            <li className="details-sc" key={screenshot?.id}>
                              <img className="details-scimg" src={screenshot?.image} alt={`Screenshot ${screenshot?.id}`} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </tr>
                <tr>
                  <div>
                    <h3>DLCs and Additions</h3>
                    <ul>
                      {gameAdditions?.results?.map((addition) => (
                        <li key={addition?.background_image}>
                          <div>
                            <img style={{height: 150}} src={addition?.background_image} alt={addition?.name} />
                            <span>{addition?.name}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </tr>
              </th>
            <td>
              <table className="game-name">
                <tbody>
                  <tr>
                    <th>Metacritic Rating</th>
                    <td><PercentageWheel percentage={gameDetails?.metacritic ?? 0} /></td>
                  </tr>
                  <tr>
                    <th>User Ratings</th>
                    <td>{ratingToStars(gameDetails?.rating)} {gameDetails?.rating?.toFixed(1)} / 5.0</td>
                  </tr>
                  <tr>
                    <th>ESRB Rating</th>
                    <td>{gameDetails?.esrb_rating?.name}</td>
                  </tr>
                  {gameDetails?.genres && (
                    <tr>
                      <th>Genres</th>
                      <td>
                        {gameDetails.genres.map((genre) => (
                          <button className="button-resp" key={genre.id} onClick={() => {navigate(`/genres/${genre?.id}`)}}>{genre.name}</button>
                        ))}
                      </td>
                    </tr>
                  )}
                  {gameDetails?.developers && (
                    <tr>
                      <th>Developed By</th>
                      <td>
                        {gameDetails.developers.map((developer) => (
                          <span>{developer.name}, </span>
                        ))}
                      </td>
                    </tr>
                  )}
                  {gameDetails?.publishers && (
                    <tr>
                      <th>Published By</th>
                      <td>
                        {gameDetails.publishers.map((publisher) => (
                          <span>{publisher.name}, </span>
                        ))}
                      </td>
                    </tr>
                  )}
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
                    <td dangerouslySetInnerHTML={{ __html: gameDetails?.description ?? '' }}></td>
                  </tr>
                  {gameStores && gameStores.results && gameStores.results.length > 0 && (
                    <tr>
                      <th>Stores:</th>
                      <td>
                        {gameStores.results.map((store) => (
                          <div key={store.id}>
                            <a href={store.url} target="_blank" rel="noopener noreferrer">
                              {store.url}
                            </a>
                          </div>
                        ))}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </td>
            </tr>
          </table>
        </tr>
      </table>    
    </div>
  ); 
}

export default Details;