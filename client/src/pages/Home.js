import React from "react";
import "../styles/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// https://www.freepik.com/free-vector/gradient-coding-logo-template_11817415.htm#query=web%20development%20logo&position=11&from_view=keyword&track=ais_user&uuid=ee8f
import categoryLogo from "../images/categoryLogo.jpg";
import JobCard from "../components/JobCard";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bannerBg bgLightGrey">
        <div className="container">
          <div className="bannerContent">
            <h1 className="textDark">
              Navigate Your Future with Career Compass
            </h1>
            <h2 className="textPrimary">Explore Jobs Here...</h2>
            <p className="textDark">
              "Welcome to Career Compass, your guide to a fulfilling career.
              Whether you're a job seeker or an employer, find opportunities and
              resources to achieve your goals. Let us help you reach your
              destination."
            </p>
            <Link to="/jobs" className="btn textWhite bgPrimary">
              FIND JOBS
            </Link>
          </div>
        </div>
      </div>
      <section className="jobCategory">
        <div className="container">
          <h2 className="title textPrimary">Job Categories</h2>
          <div className="jobCatMain">
            <div className="jobCatCard bgLightGrey rounded-6 dFlex alignCenter justifyCenter">
              <img src={categoryLogo} alt="Category Logo" />
              <h3 className="textPrimary">Software Developer</h3>
              <p className="textDark">1 Open Position</p>
            </div>
            <div className="jobCatCard bgLightGrey rounded-6 dFlex alignCenter justifyCenter">
              <img src={categoryLogo} alt="Category Logo" />
              <h3 className="textPrimary">Software Developer</h3>
              <p className="textDark">1 Open Position</p>
            </div>
            <div className="jobCatCard bgLightGrey rounded-6 dFlex alignCenter justifyCenter">
              <img src={categoryLogo} alt="Category Logo" />
              <h3 className="textPrimary">Software Developer</h3>
              <p className="textDark">1 Open Position</p>
            </div>
            <div className="jobCatCard bgLightGrey rounded-6 dFlex alignCenter justifyCenter">
              <img src={categoryLogo} alt="Category Logo" />
              <h3 className="textPrimary">Software Developer</h3>
              <p className="textDark">1 Open Position</p>
            </div>
            <div className="jobCatCard bgLightGrey rounded-6 dFlex alignCenter justifyCenter">
              <img src={categoryLogo} alt="Category Logo" />
              <h3 className="textPrimary">Software Developer</h3>
              <p className="textDark">1 Open Position</p>
            </div>
            <div className="jobCatCard bgLightGrey rounded-6 dFlex alignCenter justifyCenter">
              <img src={categoryLogo} alt="Category Logo" />
              <h3 className="textPrimary">Software Developer</h3>
              <p className="textDark">1 Open Position</p>
            </div>
            <div className="jobCatCard bgLightGrey rounded-6 dFlex alignCenter justifyCenter">
              <img src={categoryLogo} alt="Category Logo" />
              <h3 className="textPrimary">Software Developer</h3>
              <p className="textDark">1 Open Position</p>
            </div>
            <div className="jobCatCard bgLightGrey rounded-6 dFlex alignCenter justifyCenter">
              <img src={categoryLogo} alt="Category Logo" />
              <h3 className="textPrimary">Software Developer</h3>
              <p className="textDark">1 Open Position</p>
            </div>
          </div>
          <Link to="/jobs" className="btn">
            BROWSE ALL
          </Link>
        </div>
      </section>
      <section className="latestJobs bgLightGrey">
        <div className="container">
          <h2 className="title textPrimary">Latest Jobs</h2>
          <div className="latestJobsMain">
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <Link to="/jobs" className="btn">
            BROWSE ALL
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
