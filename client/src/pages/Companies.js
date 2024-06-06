import React from "react";
import "../styles/companies.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import jobs from "../images/jobs.jpg";

const Companies = () => {
  return (
    <div>
      <Header />
      <div className="breadcrumb dFlex bgLightGrey">
        <div className="container">
          <Link to="/" className="textDark link">
            Home
          </Link>
          <span className="textDark">/</span>
          <Link to="/companies" className="textPrimary link">
            Companies
          </Link>
        </div>
      </div>
      <section className="container companySection">
        <h2 className="title textPrimary">Companies</h2>
        <div className="companyCard">
          <div className="latestJobCard rounded-6">
            <div className="imgContent dFlex alignCenter">
              <img src={jobs} alt="Company Logo" />
              <div>
                <h3 className="textPrimary">WebFlow Technologies</h3>
              </div>
            </div>
            <div className="jobContent">
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span className="textPlaceHolder role">Information Technologies</span>
              </h4>
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="textPlaceHolder role">Kitchener, Canada</span>
              </h4>
            </div>
          </div>
          <div className="latestJobCard rounded-6">
            <div className="imgContent dFlex alignCenter">
              <img src={jobs} alt="Company Logo" />
              <div>
                <h3 className="textPrimary">WebFlow Technologies</h3>
              </div>
            </div>
            <div className="jobContent">
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span className="textPlaceHolder role">Information Technologies</span>
              </h4>
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="textPlaceHolder role">Kitchener, Canada</span>
              </h4>
            </div>
          </div>
          <div className="latestJobCard rounded-6">
            <div className="imgContent dFlex alignCenter">
              <img src={jobs} alt="Company Logo" />
              <div>
                <h3 className="textPrimary">WebFlow Technologies</h3>
              </div>
            </div>
            <div className="jobContent">
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span className="textPlaceHolder role">Information Technologies</span>
              </h4>
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="textPlaceHolder role">Kitchener, Canada</span>
              </h4>
            </div>
          </div>
          <div className="latestJobCard rounded-6">
            <div className="imgContent dFlex alignCenter">
              <img src={jobs} alt="Company Logo" />
              <div>
                <h3 className="textPrimary">WebFlow Technologies</h3>
              </div>
            </div>
            <div className="jobContent">
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span className="textPlaceHolder role">Information Technologies</span>
              </h4>
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="textPlaceHolder role">Kitchener, Canada</span>
              </h4>
            </div>
          </div>
          <div className="latestJobCard rounded-6">
            <div className="imgContent dFlex alignCenter">
              <img src={jobs} alt="Company Logo" />
              <div>
                <h3 className="textPrimary">WebFlow Technologies</h3>
              </div>
            </div>
            <div className="jobContent">
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span className="textPlaceHolder role">Information Technologies</span>
              </h4>
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="textPlaceHolder role">Kitchener, Canada</span>
              </h4>
            </div>
          </div>
          <div className="latestJobCard rounded-6">
            <div className="imgContent dFlex alignCenter">
              <img src={jobs} alt="Company Logo" />
              <div>
                <h3 className="textPrimary">WebFlow Technologies</h3>
              </div>
            </div>
            <div className="jobContent">
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span className="textPlaceHolder role">Information Technologies</span>
              </h4>
              <h4>
                <span className="textPlaceHolder icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="textPlaceHolder role">Kitchener, Canada</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Companies;
