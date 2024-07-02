import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [userType, setUserType] = useState('candidate');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, userType }),
    });
    if (response.ok) {
      navigate('/login');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <form className="authForm" onSubmit={handleSubmit}>
            <div className="dFlex justifyCenter">
              <h2 className="title textPrimary">Register</h2>
            </div>
            <div className="authButtons dFlex">
              <button
                type="button"
                className={`btn flex-1 ${userType === 'candidate' ? 'textWhite bgPrimary' : ''}`}
                onClick={() => setUserType('candidate')}
              >
                Candidate
              </button>
              <button
                type="button"
                className={`btn flex-1 ${userType === 'employer' ? 'textWhite bgPrimary' : ''}`}
                onClick={() => setUserType('employer')}
              >
                Employer
              </button>
            </div>
            <input
              type="text"
              name="firstName"
              placeholder="First name *"
              className="formControl"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name *"
              className="formControl"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
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
              <Link to="/login" className="textPrimary">
                Already registered? Login
              </Link>
            </div>
            <button type="submit" className="btn bgSecondary textWhite w-100 registerButton">
              Create New Account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
