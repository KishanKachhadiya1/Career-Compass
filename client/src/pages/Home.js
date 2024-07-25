import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import axios from "axios";
import { industryOptions } from "../components/Industry";

const Home = () => {
  const [latestJobs, setLatestJobs] = useState([]);

  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/auth/latest-jobs"
        );
        console.log(response.data);
        setLatestJobs(response.data);
      } catch (error) {
        console.error("Error fetching latest jobs", error);
      }
    };

    fetchLatestJobs();
  }, []);

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
            {industryOptions.map((industry) => (
              <div
                key={industry.value}
                className="jobCatCard bgLightGrey rounded-6 dFlex alignCenter justifyCenter"
              >
                <h3 className="textPrimary">{industry.label}</h3>
              </div>
            ))}
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
            {latestJobs.length ? (
              latestJobs
                .slice(0, 3)
                .map((job) => <JobCard key={job._id} job={job} />)
            ) : (
              <p>No jobs available</p>
            )}
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
