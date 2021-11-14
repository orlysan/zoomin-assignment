import React, { useState , useEffect } from 'react';
import { getFilmsList } from '../../axios';



function Toc (props){
   const [data, setData] = useState([]);
   const [err, setErr] = useState('');


   useEffect(() => {
    getFilmsList(setData, setErr)
}, [])

    
    const findMovie = (movie) => {
        props.setChosenFilm(movie)
    }

    return (
        <div>
            <ul>
               {data.map( movie => (
                   <li key={movie.episode_id} onClick={(e) => findMovie(movie, e)}>{movie.title}</li>
               ))}
            </ul>
        </div>
    )
}

export default Toc; 