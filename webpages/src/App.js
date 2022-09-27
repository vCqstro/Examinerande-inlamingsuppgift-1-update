import React from 'react';
import './App.css';
import Home from "./Components/Home";
import Contact from './Components/Contact';
import Loggedin from './Components/Loggedin';
import Medias from './Components/Medias';
import Projects from './Components/Projects';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes> 
    <Route path="/" element={<Home />} />
    <Route path="/loggedin" element={<Loggedin />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/media" element={<Medias />} />
    </Routes>
    </div>
  );
}

export default App;
