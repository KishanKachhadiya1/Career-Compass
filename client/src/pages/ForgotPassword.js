import React from 'react'
import '../styles/login.css'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const ForgotPassword = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <form className="authForm">
            <div className="dFlex justifyCenter">
              <h2 className="title textPrimary">Forgot Password</h2>
            </div>
            <input type="text" placeholder="Email *" className="formControl fpInput" />
            <Link className="btn bgPrimary textWhite w-100 loginButton rpButton">Reset Password</Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default ForgotPassword
