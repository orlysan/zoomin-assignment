
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Toc from './Components/Toc/Toc';
import './App.css';
import ChosenFilm from './Components/ChosenFilm/ChosenFilm';

function App() {
  return (
    <div className="App">
    <Container>
      <h1>The Star War API</h1>
      <Toc></Toc>
      < ChosenFilm></ChosenFilm>
    </Container>
    </div>
  );
}

export default App;
