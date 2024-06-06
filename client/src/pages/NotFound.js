import React from "react";
import "../styles/notfound.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Header />
      <section className="container notFound dFlex alignCenter justifyCenter">
        <h3 className="textPrimary">404</h3>
        <p className="textSecondary"><i class="fa-regular fa-face-frown"></i>Oops...Page not found!</p>
        <Link to="/" className="btn">Back to Home</Link>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
