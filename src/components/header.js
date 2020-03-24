import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";

const Header = ({ siteTitle }) => (
  <header>
    <nav className="main-menu">
      <h1 className="logo">
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
            borderBottom: "none"
          }}
        >
          <span className="site-title"> {siteTitle} </span>
        </Link>
      </h1>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
