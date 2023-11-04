import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Route, Link, BrowserRouter as Router, Routes} from "react-router-dom"


import './index.css';
import App from './App';
import Register from './Register';
import About from './About';
import Login from './Login';

const routing = (
  <Router>
          <Routes>
            <Route path="/" Component={App}/>
          <Route path="/register" Component={Register}/>
          <Route path="/login" Component={Login}/>
          <Route path="/about" Component={About}/>
          </Routes>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))