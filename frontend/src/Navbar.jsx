import React from 'react';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top translucent-navbar">
      <div className="container">
        <a className="navbar-brand my-color" href="/">Cool Physics</a>
        <button
          className="navbar-toggler"
          style={{ backgroundColor: 'rgba(240, 248, 255, 0.494)' }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link my-color" href="/public-recipes">3 Laws</a>
            </li>
            <li className="nav-item">
              <a className="nav-link my-color" href="/search_recipes">Cooler stuff1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link my-color" href="/my-recipes">Cooler stuff2</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link my-color" href="/my-favourites">Favourites</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
