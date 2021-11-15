import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../../redux/actions/actions';
import axios from 'axios';




function Toc (){

    const movies = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchFilmsList = async () => {
        const res = await axios
        .get('https://swapi.dev/api/films')
        .catch((err) => {
            console.log('err', err)
        });
        dispatch(getMoviesList(res.data.results))
    }
    
    useEffect(() => {
        fetchFilmsList()
    }, [])
console.log(movies)
    
    // const findMovie = (movie) => {
    //     props.setChosenFilm(movie)
    // }

    return (
        <div>
            {/* <ul>
               {data.map( movie => (
                   <li key={movie.episode_id}>{movie.title}</li>
               ))}
            </ul> */}
        </div>
    )
}

export default Toc; 