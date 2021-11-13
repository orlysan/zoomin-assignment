import React, {useState} from 'react';
import Toc from '../Components/Toc/Toc';
import ChosenFilm from '../Components/ChosenFilm/ChosenFilm';
import { Container } from 'react-bootstrap';

function Page() {

  const [chosenFilm, setChosenFilm] = useState({})


  return (
   
    <Container>
      <h1>The Star War API</h1>
      <Toc setChosenFilm={setChosenFilm} />
      <ChosenFilm chosenFilm={chosenFilm} />
    </Container>
  
  );
}

export default Page;