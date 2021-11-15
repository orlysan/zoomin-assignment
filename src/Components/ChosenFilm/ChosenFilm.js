import Button from '@restart/ui/esm/Button';
import React  from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


function ChosenFilm (){

    const dispatch = useDispatch();

    // localStorage.setItem('star-wars-favorite', JSON.stringify(item))


    const addMovieToFavorite = () => {
        dispatch()
        console.log('fav')
        // saveToLocalStorage(addMovie)
    }
 
    
    return (
        <Card>
            <Card.Body>
                <Card.Title> A New Hope</Card.Title>
                <Card.Text>"It is a period of civil war.
Rebel spaceships, striking
from a hidden base, have won
their first victory against
the evil Galactic Empire.

During the battle, Rebel
spies managed to steal secret
plans to the Empire's
ultimate weapon, the DEATH
STAR, an armored space
station with enough power
to destroy an entire planet.

Pursued by the Empire's
sinister agents, Princess
Leia races home aboard her
starship, custodian of the
stolen plans that can save her
people and restore
fre..."</Card.Text>
                <Button onClick={addMovieToFavorite}>Add to favorite</Button>
            </Card.Body>
        </Card>
    )
}

export default ChosenFilm; 