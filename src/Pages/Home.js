import React from 'react';
import Toc from '../Components/Toc/Toc';
import ChosenFilm from '../Components/ChosenFilm/ChosenFilm';
import { Container } from 'react-bootstrap';

function Home() {

  return (
   
    <Container>
      <h1>The Star War API</h1>
      <Toc />
      <ChosenFilm />
    </Container>
  
  );
}

export default Home;