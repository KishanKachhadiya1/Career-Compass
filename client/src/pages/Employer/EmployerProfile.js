import React from "react";
import EmployerHeader from "../../components/EmployerHeader";
import "../../styles/employerprofile.css";
import "../../styles/candidateprofile.css";
import Industry from "../../components/Industry";

const EmployerProfile = () => {
  return (
    <>
      <EmployerHeader />
      <section className="container employerProfile candidateProfile">
        <h2 className="title textPrimary">Profile</h2>
        <div className="profileForm bgLightGrey rounded-6">
          <form>
            <div className="profileGrid">
              <div className="formGroup">
                <label className="textPrimary dBlock">Company Name</label>
                <input
                  type="text"
                  placeholder="Company name *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">E-mail</label>
                <input
                  type="text"
                  placeholder="E-mail *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone number *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">CEO Name</label>
                <input
                  type="text"
                  placeholder="CEO name *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Size</label>
                <input
                  type="text"
                  placeholder="Ex. 5-10 *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Ownership type</label>
                <input
                  type="text"
                  placeholder="Ex. private, public *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Established In</label>
                <input
                  type="text"
                  placeholder="Ex. 2024 *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Country</label>
                <input
                  type="text"
                  placeholder="Country *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">State</label>
                <input
                  type="text"
                  placeholder="State *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">City</label>
                <input
                  type="text"
                  placeholder="City *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Industry</label>
                <Industry />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Website</label>
                <input
                  type="text"
                  placeholder="www.website.com *"
                  className="formControl"
                />
              </div>
              <div className="formGroup fullWidth">
                <label className="textPrimary dBlock">Employer Details</label>
                <textarea rows={5} placeholder="Employer details.."></textarea>
              </div>
            </div>
            <button type="submit" className="btn bgPrimary textWhite">
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EmployerProfile;
