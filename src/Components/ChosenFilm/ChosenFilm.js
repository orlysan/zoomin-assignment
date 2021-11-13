import Button from '@restart/ui/esm/Button';
import React from 'react';

function ChosenFilm (props){
 
    console.log(props.chosenFilm)
    return (
        <div>
            <h1>{props.chosenFilm.title}</h1>
            <p>{props.chosenFilm.opening_crawl}</p>
            <Button>Add to favorite</Button>
        </div>
    )
}

export default ChosenFilm; 