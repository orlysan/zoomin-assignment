import React, { useState , useEffect } from 'react';
//import { getFilmsList } from '../../axios';
import axios from 'axios';


function Toc (){
   const [data, setData] = useState([]);


   useEffect(() => {
    axios
    .get('https://swapi.dev/api/films')
    .then(res => {
        setData(res.data.results)
    }) 
}, [])

   console.log(data)
    return (
        <div>
            <h1>TOC</h1>
            <ul>
               {data.map( movie => (
                   <li key={movie.episode_id}>{movie.title}</li>
               ))}
            </ul>
        </div>
    )
}

export default Toc; 