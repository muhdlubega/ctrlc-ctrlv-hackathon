import { getGamesDetails } from "../../APIKey/APIKey";
// import "../Styles/styles.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// interface MovieDetailsProps {}

// interface Movie {
//   name: string;
//   overview: string;
//   genres: { id: number; name: string }[];
//   popularity: number;
// }

function GameDetails() {
  const [gameDetails, setGameDetails] = useState([]);
  
  // <Movie>({
  //   name: "",
  //   overview: "",
  //   genres: [],
  //   popularity: 0,
  // });

  const { id } = useParams();

  const getGamesData = () => {
    getGamesDetails(id).then((output) => {
      setGameDetails(output?.data);
    });
  };

  useEffect(() => {
    getGamesData();
  }, []);

  return (
    <div>
      <div>Show Details</div>
      <table>
        <tr>
          <th>Title</th>
          <th>{gameDetails?.name}</th>
        </tr>
        <tr>
          <th>Summary</th>
          <th>{gameDetails?.description}</th>
        </tr>
        <tr>
          <th>Genres</th>
          <th>
            {showDetails?.genres?.map((i) => {
              return <span key={i?.id}>{i?.name}</span>;
            })}
          </th>
        </tr>
        <tr>
          <th>Score</th>
          <th>{showDetails?.popularity}</th>
        </tr>
      </table>
    </div>
  );
}

export default MovieDetails;