import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo right">
          Test App
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
