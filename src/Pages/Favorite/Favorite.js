import React from 'react';
import { Container } from 'react-bootstrap';
import FavoriteList from '../../Components/FavoriteList/FavoriteList';

function Favorite (){
    return (
        <Container className="favorite-container">
            <h3 className="list-title">My favorite movie:</h3>
            <FavoriteList />
        </Container>
       
    )
}

export default Favorite;