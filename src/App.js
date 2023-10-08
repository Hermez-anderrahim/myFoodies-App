import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/mainPage/Home'
import { RestaurantDetails } from './components/restaurantDetails/RestaurantDetails';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import React ,{useState , useEffect} from 'react';
import { getPLaces } from './components/api';

function App() {
   
    const [restaurant, setrestaurant] = useState([])
    
    useEffect(()=>{
       getPLaces()
       .then((data)=>{
        setrestaurant(data.data);
       })
    },[])


    //adding the id to the object
    //  let idCount = 1;
     
     
     
      
    //  setrestaurant(item=>{
    //   item.map(data=>{
    //     let newItem = {...data,id:idCount};
    //     return(newItem)
    //   })
    //  })
    
     const newArray = Object.values(restaurant)
   
   let arrayWithIds = newArray.map((obj,index)=>({
    ...obj,
    id:index+1,
    liked:false
   }))

  const handleLikeCick = (id)=>{

   
      arrayWithIds[id].liked = true
    
   } 
  console.log(arrayWithIds);
    
   
   
  return (
    
    <div className='App'>
        <Router>
       <Navbar/>
          <Routes>
          <Route path="/"  element={<Home restaurant={arrayWithIds} setrestaurant={setrestaurant}/>}/>
          <Route path="/myfoodies/:id" element = {<RestaurantDetails restaurant={arrayWithIds} handelLikeCick={handleLikeCick}/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          </Routes>

    </Router>
      </div>
        

  );
}

export default App;
