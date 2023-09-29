import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/mainPage/Home'
import { RestaurantDetails } from './components/restaurantDetails/RestaurantDetails';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';

function App() {
  return (
    
    <div className='App'>
        <Router>
       <Navbar/>
          <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/myfoodies/" element = {<RestaurantDetails/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          </Routes>

    </Router>
      </div>
        

  );
}

export default App;
