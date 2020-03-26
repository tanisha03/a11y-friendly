import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";
import img1 from "./abc.svg";

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      style={{
        display: "flex",
        justifyContent: "center",
        textDecoration: "none",
        borderBottom: "none"
      }}
    >
      <img src={img1} alt="logo" className="logo" />
      {/* <span className="site-title"> {siteTitle} </span> */}
    </Link>
    <nav className="main-menu">
      <ul className="menu">
        <li className="menu-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">About</Link>
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
