import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUs";
import Amenities from './Components/Amenities';
import Gallery from './Components/Gallery';
import {Link } from 'react-router-dom';

function App() {
  return (
   
    <div className="font-serif" style={{backgroundColor: "#faf8f2"}}>
       <div className="mdl-grid" style={{padding: "0px 48px 0px", backgroundColor: "#cfbfb8"}}>
        <Link to="/about" className="font-extralight text-xl" style={{margin: "16px 16px 16px auto", color: "black"}}>About US</Link>
        <Link to="/amenities" className="font-extralight text-xl" style={{margin: "16px", color: "black"}}>Amenities</Link>
        <Link to="/gallery" className="font-extralight text-xl" style={{margin: "16px", color: "black"}}>Gallery</Link>
        <Link to="/" className="font-extralight text-xl" style={{margin: "16px", color: "black"}}>Home</Link>
        </div>
        <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/amenities" element={<Amenities />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
     {/* <Home></Home> */}
    </div>
  
  );
}

export default App;
