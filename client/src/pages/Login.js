import React from "react";
import "../styles/login.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <form className="authForm">
            <div className="dFlex justifyCenter">
              <h2 className="title textPrimary">Login</h2>
            </div>
            <div className="authButtons dFlex">
              <button className="btn flex-1 textWhite bgPrimary">Admin</button>
              <button className="btn flex-1">Candidate</button>
              <button className="btn flex-1">Employer</button>
            </div>
            <input type="text" placeholder="Email *" className="formControl" />
            <input
              type="password"
              placeholder="Password *"
              className="formControl"
            />
            <div className="dFlex justifyBetween alignCenter">
              <div className="dFlex alignCenter">
                <input type="checkbox" className="formCheck" />
                <label className="textPrimary">Remember me ?</label>
              </div>
              <Link to="/forgot-password" className="textPrimary">
                Forgot Password
              </Link>
            </div>
            <Link className="btn bgPrimary textWhite w-100 loginButton">Login</Link>
            <Link to="/register" className="btn bgSecondary textWhite w-100 registerButton">Create New Account</Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
