import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
// https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA
import candidateProfile from "../images/candidateProfile.jpg";

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = "Admin Name";
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bgDarkGrey">
      <div className="container">
        <nav className="dFlex justifyBetween alignCenter">
          <div className="logo dFlex alignCenter">
            <img src={logo} alt="Career Compass" />
          </div>
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
                <Link to="/login" className="dropdown-item">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
