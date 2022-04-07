import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-5">
        <Link className='navbar-brand' to="/">
          <img src="https://www.infosistemas.com.br/wp-content/themes/infosistemas/assets/images/logo.png" alt="Infosistemas" class="img-fluid lazyloaded"/>
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  exact to="/" 
                  activeClassName='selected'
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/about"
                  activeClassName='selected'
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link " 
                  to="/catalog"
                  activeClassName='selected'
                >
                  Catalog
                </NavLink>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;