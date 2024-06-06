import React from "react";
import "../styles/contactus.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// https://www.freepik.com/free-vector/customer-support-flat-design-illustration_12983846.htm#fromView=search&page=1&position=34&uuid=7c23b83f-ea56-44cc-a3
import contactImg from '../images/contactus.jpg';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="breadcrumb dFlex bgLightGrey">
        <div className="container">
          <Link to="/" className="textDark link">
            Home
          </Link>
          <span className="textDark">/</span>
          <Link to="/contact-us" className="textPrimary link">
            Contatc Us
          </Link>
        </div>
      </div>
      <section className="container contactUsSection">
        <h2 className="title textPrimary">Contact Us</h2>
        <div className="contactMain">
          <div className="contactImg">
            <img src={contactImg} alt="Contact Us" />
          </div>
          <div className="contactForm bgLightGrey rounded-6">
            <form>
              <div className="formGroup">
                <label className="textPrimary dBlock">Full Name</label>
                <input type="text" placeholder="Full name *" className="formControl bgWhite" />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">E-mail</label>
                <input type="email" placeholder="E-mail *" className="formControl bgWhite" />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Phone Number</label>
                <input type="tel" placeholder="Phone number *" className="formControl bgWhite" />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Your Message</label>
                <textarea rows="6" className="formControl" placeholder="Your message..."></textarea>
              </div>
              <button className="btn bgPrimary textWhite">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
