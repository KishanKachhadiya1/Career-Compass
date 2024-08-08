
// https://www.freepik.com/free-vector/customer-support-flat-design-illustration_12983846.htm#fromView=search&page=1&position=34&uuid=7c23b83f-ea56-44cc-a3

import React, { useState } from "react";
import "../styles/contactus.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import contactImg from "../images/contactus.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/v1/auth/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setError("");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setError("Failed to submit form");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit form");
      setMessage("");
    }
  };

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
            Contact Us
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
            {message && <p className="successMessage">{message}</p>}
            {error && <p className="errorMessage">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label className="textPrimary dBlock">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name *"
                  className="formControl bgWhite"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail *"
                  className="formControl bgWhite"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number *"
                  className="formControl bgWhite"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Your Message</label>
                <textarea
                  rows="6"
                  name="message"
                  className="formControl"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
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

