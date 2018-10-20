import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';

const HomePage = () =>  {
  return (
    <div className="container">
      <Header/>
      <div className="jumbotron align">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES2015 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    </div>
  );
}

export default HomePage;
