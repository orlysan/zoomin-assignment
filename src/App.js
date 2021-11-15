
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Favorite from './Pages/Favorite/Favorite';
import Home from './Pages/Home/Home';


function App() {

  return (
    <div className="App">
      <BrowserRouter >
    
      <Header />
      <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/favorites' element={<Favorite />} /> 
      </Routes> 
      
       </BrowserRouter>
   </div> 
   
   
  );
}

export default App;
