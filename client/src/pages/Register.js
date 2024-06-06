import React from 'react'
import '../styles/login.css'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <div>
    <Header />
    <div className="container">
      <div className="row">
        <form className="authForm">
          <div className="dFlex justifyCenter">
            <h2 className="title textPrimary">Register</h2>
          </div>
          <div className="authButtons dFlex">
            <button className="btn flex-1 textWhite bgPrimary">Candidate</button>
            <button className="btn flex-1">Employer</button>
          </div>
          <input type="text" placeholder="First name *" className="formControl" />
          <input type="text" placeholder="Last name *" className="formControl" />
          <input type="text" placeholder="Email *" className="formControl" />
          <input
            type="password"
            placeholder="Password *"
            className="formControl"
          />
          <div className="dFlex justifyBetween alignCenter">
            <Link to="/login" className="textPrimary">
              Already registered ? Login
            </Link>
          </div>
          <Link className="btn bgSecondary textWhite w-100 registerButton">Create New Account</Link>
        </form>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Register
