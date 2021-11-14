
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Favorite from './Pages/Favorite/Favorite';
import Home from './Pages/Home';
import { Container } from 'react-bootstrap';



function App() {

  return (
    <Container className="App">
      <BrowserRouter>
    
      <Header />
      <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/favorites' element={<Favorite />} /> 
      </Routes> 
      
       </BrowserRouter>
    </Container>
   
   
  );
}

export default App;
