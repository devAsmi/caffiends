import "./App.css";
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

import {HashRouter,Routes, Route} from 'react-router-dom'
import AboutUs from '../src/pages/AboutUs';
import Bev from '../src/pages/Bev';
import Checkkout from '../src/pages/Checkout'
import ColdBevs from '../src/pages/ColdBevs';
import Food from '../src/pages/Food';
import HotBevs from '../src/pages/HotBevs';
import MenuPage from '../src/pages/MenuPage'
// import Registration from './pages/Registration ';
import UserInfo from '../src/pages/UserInfo';

function App() {
  return (
    <div>
 <HashRouter>
  <Navbar/>
  <Routes>
    {/* <Route path ="/" element={<Home/>}/> */}
    <Route path = "/bev" elemeent ={<Bev/>}/>
    <Route path = "/checkout" element ={<Checkkout/>}/>
    <Route path = "/coldbev" element = {<ColdBevs/>}/>
    <Route path = "/food" element = {<Food/>}/>
    <Route path ="/hotbev" element= {<HotBevs/>}/>
    <Route path = "/menu" element = {<MenuPage/>}/>
    {/* <Route path= "/registartion" element= {<Registration/>}/> */}
    <Route path = "/about" element ={<AboutUs/>}/>
      <Route path ="/user" element={<UserInfo/>}/>
      

  </Routes>
  <Footer/>
 </HashRouter>

    </div>
   
  );
}

export default App;
