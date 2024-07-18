import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
// https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA
import candidateProfile from "../images/candidateProfile.jpg";
import { logout } from "../utils/utils";

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = "Admin";
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bgDarkGrey">
      <div className="container">
        <nav className="dFlex justifyBetween alignCenter">
          <div className="logo dFlex alignCenter">
            <Link to="/admin/admin-dashboard">
              <img src={logo} alt="Career Compass" />
            </Link>
          </div>
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="dFlex menu-group">
              <li className="menu-list">
                <Link to="/admin/admin-dashboard" className="link">
                  Dashboard
                </Link>
              </li>
              <li className="menu-list">
                <Link to="/admin/employer-list" className="link">
                  Employer
                </Link>
              </li>
              <li className="menu-list">
                <Link to="/admin/candidate-list" className="link">
                  Candidate
                </Link>
              </li>
              <li className="menu-list">
                <Link to="/admin/job-list" className="link">
                  Jobs
                </Link>
              </li>
            </ul>
            <div className="dropdown commonDropdown">
              <button onClick={toggleDropdown} className="dropbtn">
                <img src={candidateProfile} alt="logo" />
                {userName}
              </button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <Link to="" className="dropdown-item">
                    Edit Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="dropdown-item logoutButton"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
