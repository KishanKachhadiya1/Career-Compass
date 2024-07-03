import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userType, setUserType] = useState("candidate");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "admin123" &&
      userType === "admin"
    ) {
      navigate("/admin/admin-dashboard");
      return;
    }

    const response = await fetch("http://localhost:8000/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, userType }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      navigate(`/${userType}/${userType}-dashboard`);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <form className="authForm" onSubmit={handleSubmit}>
            <div className="dFlex justifyCenter">
              <h2 className="title textPrimary">Login</h2>
            </div>
            <div className="authButtons dFlex">
              <button
                type="button"
                className={`btn flex-1 ${
                  userType === "admin" ? "textWhite bgPrimary" : ""
                }`}
                onClick={() => setUserType("admin")}
              >
                Admin
              </button>
              <button
                type="button"
                className={`btn flex-1 ${
                  userType === "candidate" ? "textWhite bgPrimary" : ""
                }`}
                onClick={() => setUserType("candidate")}
              >
                Candidate
              </button>
              <button
                type="button"
                className={`btn flex-1 ${
                  userType === "employer" ? "textWhite bgPrimary" : ""
                }`}
                onClick={() => setUserType("employer")}
              >
                Employer
              </button>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="formControl"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password *"
              className="formControl"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="dFlex justifyBetween alignCenter">
              <div className="dFlex alignCenter">
                <input type="checkbox" className="formCheck" />
                <label className="textPrimary">Remember me?</label>
              </div>
              <Link to="/forgot-password" className="textPrimary">
                Forgot Password
              </Link>
            </div>
            <button
              type="submit"
              className="btn bgPrimary textWhite w-100 loginButton"
            >
              Login
            </button>
            <Link
              to="/register"
              className="btn bgSecondary textWhite w-100 registerButton"
            >
              Create New Account
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
