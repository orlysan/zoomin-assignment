import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function Favorite (){

    const favoriteList = useSelector(state => state.moviesReducer.favorites);
    
    const createFavoriteCard = favoriteList.map(currentMovie => {
           
            return (
                <ListGroup.Item>
                        {currentMovie}
                </ListGroup.Item>
                )
        })
         

    
    return (
        <Container className="favorite-container">
            <h3 className="list-title">My favorite movies:</h3>
            <ListGroup>{createFavoriteCard}</ListGroup>
        </Container>
       
    )
}

export default Favorite;