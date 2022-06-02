import React from "react";
import Logo from "../assets/app-logo.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <span className="navbar-brand">
          <img
            className="iconoApp"
            src={Logo}
            width="30"
            height="30"
            alt="icono-app"
          />
          SPA Meteorológica
        </span>
      </Link>

      <Link to="/about">
        <span className="aboutCss">About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
