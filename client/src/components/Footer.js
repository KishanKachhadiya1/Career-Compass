import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerMain">
          <div className="footerList">
            <ul>
              <h3 className="textPrimary footerTitle">Quick Links</h3>
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
              </li>{" "}
            </ul>
          </div>
          <div className="footerList">
            <ul>
              <h3 className="textPrimary footerTitle">Contact Details</h3>
              <li className="menu-list">
                <span className="textSecondary icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span>299 Doon Valley Dr, Kitchener, ON N2G 4M4</span>
              </li>
              <li className="menu-list">
                <span className="textSecondary icon">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span>+1 548-333-0586</span>
              </li>
              <li className="menu-list">
                <span className="textSecondary icon">
                <i class="fa-solid fa-envelope"></i>                </span>
                <span>careercompass@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="footerList">
            <ul>
              <h3 className="textPrimary footerTitle">Customer Policies</h3>
              <li className="menu-list">
                <Link to="/" className="link">
                  FAQs
                </Link>
              </li>
              <li className="menu-list">
                <Link to="/" className="link">
                  Terms & Conditions
                </Link>
              </li>
              <li className="menu-list">
                <Link to="/" className="link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
