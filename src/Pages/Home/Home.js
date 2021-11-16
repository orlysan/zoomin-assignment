import React from 'react';
import Toc from '../../Components/Toc/Toc';
import ChosenFilm from '../../Components/ChosenFilm/ChosenFilm';
import { Container , Row , Col } from 'react-bootstrap';
import './Home.css'
import { useSelector } from 'react-redux';

function Home() {

  const selected = useSelector((state) => state.moviesReducer.selectedMovie);
  
  console.log(selected)

  return (
    <Container className="home-page">

        <h1 className="home-page-title">The Star War API</h1>

      <Row>
        <Col sm={4}><Toc /></Col>
        <Col sm={8}>{selected != [] ?  <ChosenFilm /> : "" }</Col> 
      </Row>
    </Container>
  
  );
}

export default Home;