import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login'

ReactDOM.render(
  <Router>
    <App />
    {/* <Route path="/login" component={Login} /> */}
  </Router>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
