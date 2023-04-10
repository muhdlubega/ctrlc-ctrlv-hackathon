import { getGamesAdditions, getGamesScreenshots, getGamesDetails, getGamesStores, getGamesTrailer } from "../../APIKey/APIKey";
import "../../Styles/main.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PercentageWheel from "./Metacritic";
import ratingToStars from "./UserRatings";
import placeholder from '../../../Assets/image/placeholder.svg';
import { GameDetails } from "../../Typescript/MainTypescript";


function Details() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [showScreenshot, setShowScreenshot] = useState(false);

  //return array for state and function for the API endpoints using useState
  const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);
  const [gameTrailers, setGameTrailers] = useState<GameDetails["gameTrailers"]  | null>(null);
  const [gameAdditions, setGameAdditions] = useState<GameDetails["gameAdditions"] | null>(null);
  const [gameStores, setGameStores] = useState<GameDetails["gameStores"] | null>(null);
  const [gameScreenshots, setGameScreenshots] = useState<GameDetails["gameScreenshots"]>({ results: [] });

  //fetch API endpoints for game details
  const fetchGameDetails = async () => {
    try {
      const response = await getGamesDetails(id!);
      setGameDetails(response?.data);
    } catch (error) {
      console.log(error);
    }
  }
  const fetchGameTrailer = async () => {
    try {
      const response1 = await getGamesTrailer(id!);
      setGameTrailers(response1?.data);
    } catch (error) {
      console.log(error);
    }
  }
  const fetchGameAdditions = async () => {
    try {
      const response2 = await getGamesAdditions(id!);
      setGameAdditions(response2?.data);
    } catch (error) {
      console.log(error);
    }
  }
  const fetchGameStores = async () => {
    try {
      const response3 = await getGamesStores(id!);
      setGameStores(response3?.data);
    } catch (error) {
      console.log(error);
    }
  }
  const fetchGameScreenshots = async () => {
    try {
      const response3 = await getGamesScreenshots(id!);
      setGameScreenshots(response3?.data);
    } catch (error) {
      console.log(error);
    }
  }

  //useEffect and set dependency for the API endpoints
  useEffect(() => {
    fetchGameDetails();
    fetchGameTrailer();
    fetchGameAdditions();
    fetchGameStores();
    fetchGameScreenshots();
  },[]);

  useEffect(() => {
    const element = document.getElementById("details-container");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(gameScreenshots.results.length - 1);
    }
  }

  function nextSlide() {
    if (currentSlide < gameScreenshots.results.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }

  //display data
  return (
    <div id="details-container" className="details-container">
      {showScreenshot && (
  <div className="details-container">
  {showScreenshot && (
    <div className="screenshot-popup">
      <div className="slider">
        <img
          src={
            gameScreenshots.results[currentSlide]?.image || placeholder
          }
          alt={`Screenshot ${currentSlide}`}
        />
      </div>
      {gameScreenshots.results.length > 1 && (
        <div className="arrows">
          <button onClick={() => prevSlide()}>&#10094;</button>
          <button onClick={() => nextSlide()}>&#10095;</button>
        </div>
      )}
      <button
        className="close-btn"
        onClick={() => setShowScreenshot(false)}
      >
        X
      </button>
    </div>
  )}
</div>
)}
      <div className="details-content-skew">
      <table className="game-name">
        <tr>
          <div className="details-title">{gameDetails?.name}</div>
        </tr>
        <tr>
          <table>
            <tr>
              <th className="table-row1">
                <tr>
                  <img className="details-image" src={gameDetails?.background_image} alt="Game Background"/>
                </tr>
                <tr>
                  <span>
                    {gameScreenshots && gameScreenshots.results && (
  <div className="details-screenshot">
    <ul>
      {gameScreenshots?.results?.map((screenshot, index) => (
        <li key={screenshot?.id}>
          <img
            src={screenshot?.image}
            alt={`Screenshot ${screenshot?.id}`}
            onClick={() => setShowScreenshot(true)}
          />
        </li>
      ))}
    </ul>
  </div>
)}
                    {gameTrailers && gameTrailers?.results && gameTrailers?.results.length > 0 && (
                      <video className="details-trailer" controls autoPlay muted>
                        <source src={gameTrailers?.results[0]?.data?.max} type="video/mp4" />
                      </video>
                    )}
                  </span>
                </tr>
              </th>
            </tr>
          </table>
        </tr>
      </table>
      </div>
      <div className="details-content">
              <table className="game-name">
                <tbody>
                  <tr>
                    <th><span>Metacritic Score</span></th>
                    <td><PercentageWheel percentage={gameDetails?.metacritic ?? 0} /></td>
                  </tr>
                  <tr>
                    <th>User Ratings</th>
                    <td className="details-star"><div className="stars-container">{ratingToStars(gameDetails?.rating)}</div> {gameDetails?.rating?.toFixed(1)} / 5.0</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                    <div className="ratings-container">
        {gameDetails?.ratings?.map((rating, index) => (
          <div key={index} className="rating">
            
            <div className="percentage-bar">
              <div className="percentage-bar-value" style={{ width: `${rating.percent}%` }}>
              </div>
            </div>
            <div className="percentage">{rating.percent}% </div>
            <div className="rating-title">{rating.title}</div>
          </div>
        ))}
      </div>
                    </td>
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
                  <tr>
                    <th>Game Website</th>
                    <td>
                    <a href={gameDetails?.website} target="_blank" rel="noopener noreferrer">{gameDetails?.website}</a>
                    </td>
                  </tr>
                  <tr>
                    <th>Game Subreddit</th>
                    <td>
                    <a href={gameDetails?.reddit_url} target="_blank" rel="noopener noreferrer">{gameDetails?.reddit_url}</a>
                    </td>
                  </tr>
                  {gameDetails?.developers && (
                    <tr>
                      <th>Developed By</th>
                      <td>
                        {gameDetails.developers.map((developer) => (
                          <div>{developer.name}</div>
                        ))}
                      </td>
                    </tr>
                  )}
                  {gameDetails?.publishers && (
                    <tr>
                      <th>Published By</th>
                      <td>
                        {gameDetails.publishers.map((publisher) => (
                          <div>{publisher.name}</div>
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
                  {gameDetails?.platforms && (
                    <tr>
                      <th>Available on these platforms</th>
                      <td>
                        {gameDetails.platforms.map((platform) => (
                          <div>
                            <div>{platform?.platform?.name}</div>
                          </div>
                        ))}
                      </td>
                    </tr>
                  )}
                  
                  {gameStores && gameStores.results && gameStores.results.length > 0 && (
                    <tr>
                      <th>Where to Play:</th>
                      <td className="wtp-fonts">
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
                  {gameDetails?.platforms?.map((platform) => (
                  platform?.platform?.name === "PC" && (
                    <tr key={platform?.platform?.name}>
                        <th>PC System Requirements</th>
                        <td>
                        <div>{platform?.requirements?.minimum}</div>
                        <div>{platform?.requirements?.recommended}</div>
                        </td>
                    </tr>
                  )
                ))}
                <tr>
                    <th>DLCs and Additions</th>
                  <td>
                    <ul className="details-dlc">
                      {gameAdditions?.results?.map((addition) => (
                        <li key={addition?.background_image}>
                          <div>
                            <div className="details-dlc-image">
                            <img src={addition?.background_image} alt={"DLC and Additions"} 
                            onError={(e) => {
                              e.currentTarget.src = placeholder;
                            }}/>
                            </div>
                            <div>{addition?.name}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
                </tbody>
              </table>
              </div>
    </div>
  ); 
}
export default Details;
