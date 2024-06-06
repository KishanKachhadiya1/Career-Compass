import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

const Header = () => {
  return (
    <header className="bgDarkGrey">
      <div className="container">
        <nav className="dFlex justifyBetween alignCenter">
          <div className="logo dFlex alignCenter">
            <img src={logo} alt="Career Compass" />
          </div>
          <ul className="dFlex menu-group">
            <li className="menu-list">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/jobs" className="link">
                Jobs
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/companies" className="link">
                Companies
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/about-us" className="link">
                About Us
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/contact-us" className="link">
                Contact Us
              </Link>
            </li>
          </ul>
          <Link to="/login" className="btn">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
