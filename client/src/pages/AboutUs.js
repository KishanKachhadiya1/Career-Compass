import React from "react";
import "../styles/aboutus.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="breadcrumb dFlex bgLightGrey">
        <div className="container">
          <Link to="/" className="textDark link">
            Home
          </Link>
          <span className="textDark">/</span>
          <Link to="/about-us" className="textPrimary link">
            About Us
          </Link>
        </div>
      </div>
      <section className="container aboutUsSection">
        <h2 className="title textPrimary">About Us</h2>
        <div className="aboutUsContent">
          <h3 className="textPrimary">Welcome to Career Compass!</h3>
          <p className="textDark">
            At Career Compass, we are dedicated to guiding you towards a
            fulfilling career path. Whether you are a recent graduate embarking
            on your first job search, a seasoned professional seeking new
            opportunities, or an employer looking for the perfect candidate, our
            mission is to help you navigate the complexities of the job market
            with ease and confidence.
          </p>
        </div>
        <div className="aboutUsContent">
          <h3 className="textPrimary">Our Vision</h3>
          <p className="textDark">
            Our vision is to be the leading career platform that empowers
            individuals and businesses alike. We strive to create a space where
            job seekers can find meaningful opportunities and employers can
            discover top talent, fostering growth and success for all.
          </p>
        </div>
      </section>
      <section className="bgLightGrey stepSection">
        <div className="container">
          <h2 className="title textPrimary">How it works?</h2>
          <div className="stepMain">
            <div className="stepCard bgWhite rounded-6 dFlex alignCenter justufyCenter">
              <div className="textPrimary number stepNumber dFlex justifyCenter alignCenter">
                1
              </div>
              <h3 className="textPrimary">Find the Perfect Job</h3>
              <p className="textPlaceHolder textCenter">
                Browse through our extensive database of job listings to find
                roles that match your skills, interests, and career goals.
              </p>
            </div>
            <div className="stepCard bgWhite rounded-6 dFlex alignCenter justufyCenter">
              <div className="textPrimary number stepNumber dFlex justifyCenter alignCenter">
                2
              </div>
              <h3 className="textPrimary">Submit Your Application</h3>
              <p className="textPlaceHolder textCenter">
                Craft a compelling resume and cover letter, tailored to the job
                you are applying for, and submit your application directly
                through our platform.
              </p>
            </div>
            <div className="stepCard bgWhite rounded-6 dFlex alignCenter justufyCenter">
              <div className="textPrimary number stepNumber dFlex justifyCenter alignCenter">
                3
              </div>
              <h3 className="textPrimary">Ace the Interview</h3>
              <p className="textPlaceHolder textCenter">
                Utilize our resources and tips to prepare for interviews,
                confidently showcasing your qualifications and fit for the role
                to secure the job offer.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
