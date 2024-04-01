import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/ContactUs';
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

// App component for the single page application layout
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/carousel' element={<Carousel />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App