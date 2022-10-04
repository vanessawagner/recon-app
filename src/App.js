import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Recons from './Recons'
import Navigation from './Navigation'
import './App.css';

const App = () =>{
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recons" element={<Recons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
