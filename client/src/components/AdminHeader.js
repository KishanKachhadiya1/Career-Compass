import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

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
            <Link to="/admin-dashboard" className="link">
              Dashboard
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/employer-list" className="link">
              Employer
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/candidate-list" className="link">
              Candidate
            </Link>
          </li>
        </ul>
        <Link to="/login" className="btn">
          Logout
        </Link>
      </nav>
    </div>
  </header>
  )
}

export default EmployerHeader
