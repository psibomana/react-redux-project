import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import './css/index.css';
import './css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  </BrowserRouter>, document.getElementById('root'));
