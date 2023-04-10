import {useParams, useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {getGenres} from "../../APIKey/APIKey";
import { Genre } from "../../Typescript/MainTypescript";
// import myGif from';



function Genres() { 
  const [genresArr, setGenresArr] = useState<Genre[]>([]); // Create a state variable (genresArr) and a function (setGenresArr) to update value
  const navigate = useNavigate();

  const getGen = () => { // Fetch and update Genres data
    getGenres().then(output => {
      setGenresArr(output?.data?.results);
    });
  };

  useEffect(() => {
    getGen();
  }, []);

  const First4 = genresArr.slice(0, 4); //Slicing the genresArr state into different segments
  const Second4 = genresArr.slice(4, 8);
  const Third4 = genresArr.slice(8, 12);
  const Fourth4 = genresArr.slice(12, 16);
  const Last3 = genresArr.slice(16, 20);

  return (
    <div>
      <div className="details-title">Genres:</div>
      <div className="genregroup">
        {First4?.map((i: Genre) => { {/*The map() function is used to iterate over the sliced segments and generate button elements for each genre*/}
          return (
            <button className={`details-${i?.name?.toLowerCase()}`} onClick={() => {navigate(`/genres/${i?.id}`)}}> 
              {i?.name}
            </button>
          );
        })}
        {Second4?.map((i: Genre) => {
          return (
            <button className={`details-${i?.name?.toLowerCase()}`} onClick={() => {navigate(`/genres/${i?.id}`)}}>
              {i?.name}
            </button>
          );
        })}
        {Third4?.map((i: Genre) => {
          return (
            <button className={`details-${i?.name?.toLowerCase()}`} onClick={() => {navigate(`/genres/${i?.id}`)}}>
              {i?.name}
            </button>
          );
        })}
        {Fourth4?.map((i: Genre) => {
          return (
            <button className={`details-${i?.name?.toLowerCase()}`} onClick={() => {navigate(`/genres/${i?.id}`)}}>
              {i?.name}
            </button>
          );
        })}
        {Last3?.map((i: Genre) => {
          return (
            <button className={`details-${i?.name?.toLowerCase()}`} onClick={() => {navigate(`/genres/${i?.id}`)}}>
              {i?.name}
            </button>
          );
        })}
      </div>
      <br></br>
      {/* <img src={myGif} alt="Loading...." /> */}
    </div>
  );
}

export default Genres;