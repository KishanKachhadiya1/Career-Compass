import React from "react";
import "../styles/jobdetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import jobs from "../images/jobs.jpg";

const JobDetails = () => {
  return (
    <div>
      <Header />
      <div className="breadcrumb dFlex bgLightGrey">
        <div className="container">
          <Link to="/" className="textDark link">
            Home
          </Link>
          <span className="textDark">/</span>
          <Link to="/jobs" className="textDark link">
            Jobs
          </Link>
          <span className="textDark">/</span>
          <Link to="/job-details" className="textPrimary link">
            Job Details
          </Link>
        </div>
      </div>
      <section className="container currentJob">
        <h2 className="title textPrimary">Job Details</h2>
        <div className="latestJobCard bgWhite rounded-6">
          <div className="dFlex alignCenter">
            <div>
              <div className="imgContent dFlex alignCenter">
                <img src={jobs} alt="Company Logo" />
                <div>
                  <h3 className="textPrimary">Web Designer</h3>
                  <p className="textPlaceHolder companyTitle">
                    WebFlow Technologies
                  </p>
                </div>
              </div>
              <div className="jobContent">
                <h4>
                  <span className="textPlaceHolder icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </span>
                  <span className="textPlaceHolder role">Designer</span>
                </h4>
                <h4>
                  <span className="textPlaceHolder icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span className="textPlaceHolder role">
                    Kitchener, Canada
                  </span>
                </h4>
              </div>
            </div>
            <Link to="/" className="btn applyBtn">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
      <section className="jobDesc">
        <div className="container">
          <div className="jobMainGrid">
            <div className="jobMainContent">
              <div className="jobContent">
                <h3 className="textPrimary jobHeading">Job Description</h3>
                <p className="textDark jobParagraph">
                  We are looking for a talented Web Designer to create amazing
                  user experiences. The ideal candidate should have an eye for
                  clean and artful web design and be able to translate
                  high-level requirements into interaction flows and artifacts.
                  They will be able to transform them into beautiful, intuitive,
                  and functional designs.
                </p>
              </div>
              <div className="jobContent">
                <h3 className="textPrimary jobHeading">Company Overview</h3>
                <p className="textDark jobParagraph">
                  WebFlow Technologies is a leading innovator in the tech
                  industry, committed to delivering cutting-edge digital
                  solutions. Our mission is to provide outstanding web
                  experiences to our clients, ranging from small businesses to
                  large enterprises. We foster a collaborative and dynamic work
                  environment where creativity and excellence thrive.
                </p>
              </div>
              <div className="jobContent">
                <h3 className="textPrimary jobHeading">Responsibilities</h3>
                <ul>
                  <li className="textDark jobParagraph">
                    Design and develop visually appealing and user-friendly
                    websites
                  </li>
                  <li className="textDark jobParagraph">
                    Collaborate with product managers, developers, and other
                    designers to define and implement innovative solutions for
                    the product direction, visuals, and experience
                  </li>
                  <li className="textDark jobParagraph">
                    Create wireframes, storyboards, user flows, process flows,
                    and site maps to effectively communicate interaction and
                    design ideas
                  </li>
                  <li className="textDark jobParagraph">
                    Present and defend designs and key deliverables to peers and
                    executive-level stakeholders
                  </li>
                  <li className="textDark jobParagraph">
                    Conduct user research and evaluate user feedback
                  </li>
                  <li className="textDark jobParagraph">
                    Establish and promote design guidelines, best practices, and
                    standards
                  </li>
                  <li className="textDark jobParagraph">
                    Stay up-to-date with the latest web design trends,
                    techniques, and technologies
                  </li>
                </ul>
              </div>
              <div className="jobContent">
                <h3 className="textPrimary jobHeading">Benefits</h3>
                <ul>
                  <li className="textDark jobParagraph">
                    Competitive salary and performance bonuses
                  </li>
                  <li className="textDark jobParagraph">
                    Comprehensive health, dental, and vision insurance
                  </li>
                  <li className="textDark jobParagraph">
                    Flexible work hours and remote work options
                  </li>
                  <li className="textDark jobParagraph">
                    Generous paid time off and holidays
                  </li>
                  <li className="textDark jobParagraph">
                    Professional development opportunities and training
                  </li>
                  <li className="textDark jobParagraph">
                    Collaborative and innovative work environment
                  </li>
                  <li className="textDark jobParagraph">
                    Employee wellness programs and resources
                  </li>
                </ul>
              </div>
            </div>
            <div className="jobMainCard bgLightGrey rounded-6">
              <h3 className="textPrimary">Job Overview</h3>
              <div className="dFlex justifyBetween overViewList">
                <label className="textDark">Date posted:</label>
                <label className="textPlaceHolder">1st June, 2024</label>
              </div>
              <div className="dFlex justifyBetween overViewList">
                <label className="textDark">Expiration date:</label>
                <label className="textPlaceHolder">30th June, 2024</label>
              </div>
              <div className="dFlex justifyBetween overViewList">
                <label className="textDark">Job type</label>
                <label className="textPlaceHolder">Full-time</label>
              </div>
              <div className="dFlex justifyBetween overViewList">
                <label className="textDark">Shift</label>
                <label className="textPlaceHolder">Monday-Friday</label>
              </div>
              <div className="dFlex justifyBetween overViewList">
                <label className="textDark">Location</label>
                <label className="textPlaceHolder">Kitchener, Canada</label>
              </div>
              <div className="dFlex justifyBetween overViewList">
                <label className="textDark">Job Experience:</label>
                <label className="textPlaceHolder">2 years</label>
              </div>
              <div className="dFlex justifyBetween overViewList">
                <label className="textDark">Salary</label>
                <label className="textPlaceHolder">$35k - $40k</label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JobDetails;
