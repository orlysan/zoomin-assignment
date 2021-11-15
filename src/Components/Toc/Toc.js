import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../../redux/actions/actions';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';


function Toc (){

    const movies = useSelector((state) => state.allMovies.movies);
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

    const mapList = movies.map( movie => {
        return <ListGroup.Item key={movie.episode_id}>{movie.title}</ListGroup.Item>
    })
   

    return (
        <ListGroup variant="flush">
            {mapList}   
        </ListGroup>   
    )
}

export default Toc; 