import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"


const CandidateHeader = () => {
  return (
    <header className="bgDarkGrey">
      <div className="container">
        <nav className="dFlex justifyBetween alignCenter">
          <div className="logo dFlex alignCenter">
            <img src={logo} alt="Career Compass" />
          </div>
          <ul className="dFlex menu-group">
            <li className="menu-list">
              <Link to="/candidate-dashboard" className="link">
                Dashboard
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/candidate-profile" className="link">
                Profile
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/candidate-applied-jobs" className="link">
                Applied Jobs
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/candidate-saved-jobs" className="link">
                Saved Jobs
              </Link>
            </li>
          </ul>
          <Link to="/login" className="btn">
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default CandidateHeader;
