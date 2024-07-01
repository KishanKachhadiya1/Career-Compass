import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const EmployerHeader = () => {
  return (
    <header className="bgDarkGrey">
      <div className="container">
        <nav className="dFlex justifyBetween alignCenter">
          <div className="logo dFlex alignCenter">
            <img src={logo} alt="Career Compass" />
          </div>
          <ul className="dFlex menu-group">
            <li className="menu-list">
              <Link to="/employer/employer-dashboard" className="link">
                Dashboard
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/employer/employer-profile" className="link">
                Profile
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/employer/employer-jobs" className="link">
                Jobs
              </Link>
            </li>
            <li className="menu-list">
              <Link to="/employer/candidate-job-list" className="link">
                Candidates
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

export default EmployerHeader;
