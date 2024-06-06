import React from "react";
import "../styles/jobs.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";

const Jobs = () => {
  return (
    <div>
      <Header />
      <div className="breadcrumb dFlex bgLightGrey">
        <div className="container">
          <Link to="/" className="textDark link">
            Home
          </Link>
          <span className="textDark">/</span>
          <Link to="/jobs" className="textPrimary link">
            Jobs
          </Link>
        </div>
      </div>
      <section className="container jobSection">
        <h2 className="title textPrimary">Find Jobs</h2>
        <div className="jobMain">
          <div className="jobFilter">
            <div className="dFlex justifyBetween alignCenter filterDiv">
              <h3 className="textPrimary filterTitle">Filters</h3>
              <button className="btn">Reset Filter</button>
            </div>
            <div className="filterGroup">
              <label className="textPrimary searchLabel">
                Search by keywords
              </label>
              <input
                type="text"
                placeholder="Job title, company"
                className="searchInput inputBox"
              />
            </div>
            <div className="filterGroup">
              <label className="textPrimary searchLabel">Categories</label>
              <select className="searchInput inputBox">
                <option value="none" selected>
                  None
                </option>
                <option value="engineering">Engineering</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="sales">Sales</option>
                <option value="it">Information Technology</option>
              </select>
            </div>
            <div className="filterGroup">
              <label className="textPrimary searchLabel">Skills</label>
              <select className="searchInput inputBox">
                <option value="none" selected>
                  None
                </option>
                <option value="communication">Communication</option>
                <option value="project-management">Project Management</option>
                <option value="data-analysis">Data Analysis</option>
                <option value="programming">Programming</option>
                <option value="design">Design</option>
              </select>
            </div>
            <div className="filterGroup">
              <label className="textPrimary searchLabel">
                Search by keywords
              </label>
              <div className="filterType dFlex justifyBetween alignCenter">
                <label className="textDark">Information Technology</label>
                <input type="checkbox" class="formCheck" />
              </div>
              <div className="filterType dFlex justifyBetween alignCenter">
                <label className="textDark">Engineering</label>
                <input type="checkbox" class="formCheck" />
              </div>
              <div className="filterType dFlex justifyBetween alignCenter">
                <label className="textDark">Teacher</label>
                <input type="checkbox" class="formCheck" />
              </div>
              <div className="filterType dFlex justifyBetween alignCenter">
                <label className="textDark">Finance and Banking</label>
                <input type="checkbox" class="formCheck" />
              </div>
              <div className="filterType dFlex justifyBetween alignCenter">
                <label className="textDark">Constructions</label>
                <input type="checkbox" class="formCheck" />
              </div>
              <div className="filterType dFlex justifyBetween alignCenter">
                <label className="textDark">Business</label>
                <input type="checkbox" class="formCheck" />
              </div>
            </div>
          </div>
          <div className="jobList">
            <div className="latestJobsMain jobCard">
              <Link to="/job-details">
                <JobCard />
              </Link>
              <Link to="/job-details">
                <JobCard />
              </Link>
              <Link to="/job-details">
                <JobCard />
              </Link>
              <Link to="/job-details">
                <JobCard />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Jobs;
