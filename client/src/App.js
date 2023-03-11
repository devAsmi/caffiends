import "./App.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import AboutUs from "../src/pages/AboutUs";
import Checkout from "../src/pages/Checkout";
import ColdBevs from "../src/pages/ColdBevs";
import Food from "../src/pages/Food";
import HotBevs from "../src/pages/HotBevs";
import MenuPage from "../src/pages/MenuPage";
import Registration from "./pages/Registration ";
import UserInfo from "../src/pages/UserInfo";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/coldbev" element={<ColdBevs />} />
          <Route path="/food" element={<Food />} />
          <Route path="/hotbev" element={<HotBevs />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/user" element={<UserInfo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
