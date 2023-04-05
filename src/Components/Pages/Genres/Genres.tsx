import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import APIKey from "../Components/APIKey/APIKey"; 


function GenreList(){
    const [GenresArr, setGenresArr] = useState([]);
    const navigate = useNavigate();

    const getGen = () => {
        APIKey.getGenres().then(output => {setGenresArr(output?.data?.results)})
    }

    useEffect(() => {
        getGen();
    },[]);

    console.log("genres", GenresArr)

    const First4 = GenresArr.slice(0, 4);
    const Second4 = GenresArr.slice(4, 8);
    const Third4 = GenresArr.slice(8, 12);
    const Fourth4 = GenresArr.slice(12, 16);
    const Last3 = GenresArr.slice(16, 20);

    return(
        <div>
            <div className="topic">Genres:</div>
            <div className="genregroup">{First4?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/GenreGames${i?.id}`)}}>{i?.name}</button>)})}</div>
            <div className="genregroup">{Second4?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/GenreGames/${i?.id}`)}}>{i?.name}</button>)})}</div>
            <div className="genregroup">{Third4?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/GenreGames/${i?.id}`)}}>{i?.name}</button>)})}</div>
            <div className="genregroup">{Fourth4?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/GenreGames/${i?.id}`)}}>{i?.name}</button>)})}</div>
            <div className="genregroup">{Last3?.map(i => {return(<button className="genrebutton" onClick={()=>{navigate(`/GenreGames/${i?.id}`)}}>{i?.name}</button>)})}</div>

            <br></br>
        </div>
    )
}
export default GenreList 

// API Keys for game genres
// export const getGenres = () => {
//   return axios.get("https://api.rawg.io/api/genres?key=bc29961cd2654dd9a9ce173f3fb160bc");
// }

// export const getGenreGames = ({page,genre_id}: Query) => {
//   return axios.get(`https://api.rawg.io/api/games?key=bc29961cd2654dd9a9ce173f3fb160bc&page_size=40&page=${page}&genres=${genre_id}`);
// }