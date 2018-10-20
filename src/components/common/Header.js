import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Pluralsight Administration</Link>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/courses" className="nav-item nav-link">Courses</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
