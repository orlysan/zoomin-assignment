import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

function ChosenFilm (props){

    const [favorite, setFvorite] = useState([])

    const saveToLocalStorage = (item) => {
        localStorage.setItem('star-wars-favorite', JSON.stringify(item))
    }

    const addToFavoriteList = () => {
        const addMovie = [...favorite, props.chosenFilm.title]
        setFvorite(addMovie)
        saveToLocalStorage(addMovie)
    }
 
    
    return (
        <div>
            <h1>{props.chosenFilm.title}</h1>
            <p>{props.chosenFilm.opening_crawl}</p>
            <Button onClick={addToFavoriteList}>Add to favorite</Button>
        </div>
    )
}

export default ChosenFilm; 