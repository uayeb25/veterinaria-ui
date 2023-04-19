import React from 'react';
import logo from './logo.svg';

import Color from './pages/Color';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>            
            <Link to="/home">
              Home
            </Link>            
          </li>
          <li>            
            <Link to="/colors">
              Colors
            </Link>            
          </li>
        </ul>
      </nav>

      <Routes>
        <Route 
          path="/colors" 
          element={<Color />} 
        />
        <Route 
          path="/home" 
          element={<h1>Hello OOP Student</h1>} 
        />
      </Routes>


    </Router>
  );
}

export default App;
