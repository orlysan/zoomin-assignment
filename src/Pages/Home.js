import React from 'react';
import Toc from '../Components/Toc/Toc';
import ChosenFilm from '../Components/ChosenFilm/ChosenFilm';
import { Container , Row , Col} from 'react-bootstrap';

function Home() {

  return (
    <Container>
      <h1>The Star War API</h1>
      <Row>
        <Col sm={4}><Toc /></Col>
        <Col sm={8}><ChosenFilm /></Col> 
      </Row>
    </Container>
  
  );
}

export default Home;