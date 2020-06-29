import React from "react";
import { NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <h1 className="navbar-brand font-weight-bold">Bikram Shankhar</h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">

          <li class="nav-item">
            <NavLink
            exact
              to="/"
              className="nav-link"
              activeClassName= "nav-link active"
            >
              Home
            </NavLink>
          
            </li>
            
            <li class="nav-item">
            <NavLink
            exact
              to="/about"
              className="nav-link"
              activeClassName= "nav-link active"
            >
              About
            </NavLink>
          
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link"
                activeClassName= "nav-link active"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName= "nav-link active"
              >
                Contact
              </NavLink>
            </li>
         </ul>
      </div>
        
    </nav>
  );
}

export default Navbar;
