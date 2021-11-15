import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector , useDispatch } from 'react-redux';
import FavoriteList from '../../Components/FavoriteList/FavoriteList';

function Favorite (){

    const favoriteList = useSelector(state => state.allMovies.Favorite);
    const dispatch = useDispatch();
    const createFavoriteCard = () => {
        dispatch(favoriteList)
    }
console.log(createFavoriteCard)
    return (
        <Container className="favorite-container">
            <h3 className="list-title">My favorite movie:</h3>
            <FavoriteList />
        </Container>
       
    )
}

export default Favorite;