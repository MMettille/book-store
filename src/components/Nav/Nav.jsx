import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <h2 className="nav-title">Mary Mettille</h2>

      <div>
        <Link className="navLink" to="/Portfolio">
          Portfolio of Work
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/about">
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Nav;
