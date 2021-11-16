import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorite } from "../../redux/actions/actions";
import "./Favorite.css";

function Favorite() {
  const favoriteList = useSelector(state => state.moviesReducer.favorites);
  const dispatch = useDispatch();
  console.log(favoriteList);

  const removeItem = currentMovie => {
    dispatch(removeFromFavorite(currentMovie));
  };

  const createFavoriteCard = favoriteList.map(currentMovie => {
    return (
      <ListGroup.Item claasName="favorite-list">
        {currentMovie}
        <span>
          <Button onClick={() => removeItem(currentMovie)}>
            Remove from favorites
          </Button>
        </span>
      </ListGroup.Item>
    );
  });

  return (
    <Container className="favorite-container">
      <h2 className="list-title">My favorite movies</h2>
      <ListGroup>
        {createFavoriteCard}
      </ListGroup>
    </Container>
  );
}

export default Favorite;
