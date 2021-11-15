import Button from '@restart/ui/esm/Button';
import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ChosenFilm (){

    // localStorage.setItem('star-wars-favorite', JSON.stringify(item))


    const addMovieToFavorite = () => {
        console.log('fav')
        // saveToLocalStorage(addMovie)
    }
 
    
    return (
        <div>
            <h1> chosenFilm.title</h1>
            <p>chosenFilm.opening_crawl</p>
            <Button onClick={addMovieToFavorite}>Add to favorite</Button>
        </div>
    )
}

export default ChosenFilm; 