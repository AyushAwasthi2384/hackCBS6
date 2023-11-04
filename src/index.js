import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom"


import './index.css';
import App from './App';

const routing = (
  <Router>
    <Routes>
      <Route path="/" Component={App} />
      {/* <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/> */}
    </Routes>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))