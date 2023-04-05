import {useParams, useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {getGenres} from "../../APIKey/APIKey";
// import './index.css';

interface Genre {
  id: number;
  name: string;
}

function Genres() {
  const [genresArr, setGenresArr] = useState<Genre[]>([]);
  const navigate = useNavigate();

  const getGen = () => {
    getGenres().then(output => {
      setGenresArr(output?.data?.results);
    });
  };

  useEffect(() => {
    getGen();
  }, []);

  console.log("genres", genresArr);

  const First4 = genresArr.slice(0, 4);
  const Second4 = genresArr.slice(4, 8);
  const Third4 = genresArr.slice(8, 12);
  const Fourth4 = genresArr.slice(12, 16);
  const Last3 = genresArr.slice(16, 20);

  return (
    <div>
      <div className="topic">Genres:</div>
      <div className="genregroup">
        {First4?.map((i: Genre) => {
          return (
            <button onClick={() => {navigate(`/genres/${i?.id}`)}}>
              {i?.name}
            </button>
          );
        })}
      </div>
      <div className="genregroup">
        {Second4?.map((i: Genre) => {
          return (
            <button onClick={() => {navigate(`/genres/${i?.id}`)}}>
              {i?.name}
            </button>
          );
        })}
      </div>
      <div className="genregroup">
        {Third4?.map((i: Genre) => {
          return (
            <button onClick={() => {navigate(`/genres/${i?.id}`)}}>
              {i?.name}
            </button>
          );
        })}
      </div>
      <div className="genregroup">
        {Fourth4?.map((i: Genre) => {
          return (
            <button onClick={() => {navigate(`/genres/${i?.id}`)}}>
              {i?.name}
            </button>
          );
        })}
      </div>
      <div className="genregroup">
        {Last3?.map((i: Genre) => {
          return (
            <button onClick={() => {navigate(`/genres/${i?.id}`)}}>
              {i?.name}
            </button>
          );
        })}
      </div>
      <br></br>
    </div>
  );
}

export default Genres;