import Button from '@restart/ui/esm/Button';
import React  from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../../redux/actions/actions';


function ChosenFilm (){

    const favorite = useSelector((state) => state.moviesReducer.selectedMovie);
    const favoriteList = useSelector((state) => state.moviesReducer.favorites);
    const dispatch = useDispatch();
    


    const addMovieToFavorite = () => {
        const findFavorite = favoriteList.find((fav) => fav == favorite.title);
        if(findFavorite == undefined){
            favoriteList.push(favorite.title)
            dispatch(addToFavorite(favoriteList))
        }
    
        localStorage.setItem('star-wars-favorite', JSON.stringify(favoriteList))
    }
 
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{favorite.title}</Card.Title>
                <Card.Text>{favorite.opening_crawl}</Card.Text>
                <Button onClick={addMovieToFavorite}>Add to favorite</Button>
            </Card.Body>
        </Card>
    )
}

export default ChosenFilm; 