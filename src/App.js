
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Favorite from './Pages/Favorite/Favorite';
import Home from './Pages/Home';


function App() {

  return (
    <div className="App">
    <Header />
    <Home/>
    <Favorite />
    </div>
  );
}

export default App;
