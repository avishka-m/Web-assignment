import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/about';
import Navbar from './components/navbar/navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;