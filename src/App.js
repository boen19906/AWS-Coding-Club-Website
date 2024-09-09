import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Comps from './components/pages/Comps';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/comps" element={<Comps/>}/>
          <Route path="/sign-up" exact element={<SignUp/>}/>
        </Routes>
      </Router>

     
    </>
      
   
  );
}

export default App;
