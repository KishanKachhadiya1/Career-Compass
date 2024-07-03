import React from "react";
import CandidateHeader from "../../components/CandidateHeader";
import "../../styles/candidateprofile.css";
import Skills from "../../components/Skills";
import Languages from "../../components/Languages";
import MaritalStatus from "../../components/MaritalStatus";

const CandidateEditProfile = () => {
  return (
    <>
      <CandidateHeader />
      <section className="container candidateProfile">
        <h2 className="title textPrimary">Edit Profile</h2>
        <div className="profileForm bgLightGrey rounded-6">
          <form>
            <div className="profileGrid">
              <div className="formGroup">
                <label className="textPrimary dBlock">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Gender</label>
                <div className="dFlex alignCenter">
                  <div className="radioGroup dFlex alignCenter">
                    <input
                      type="radio"
                      className="radioInput"
                      name="gender"
                      value="Male"
                    />
                    <label className="radioLabel">Male</label>
                  </div>
                  <div className="radioGroup dFlex alignCenter">
                    <input
                      type="radio"
                      className="radioInput"
                      name="gender"
                      value="Female"
                    />
                    <label className="radioLabel">Female</label>
                  </div>
                </div>
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Skills</label>
                <Skills />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Languages</label>
                <Languages />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Marital Status</label>
                <MaritalStatus />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="State *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Experience</label>
                <input
                  type="text"
                  name="experience"
                  placeholder="Experience (ex. 1 year) *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address *"
                  className="formControl"
                />
              </div>
            </div>
            <button type="submit" className="btn bgPrimary textWhite">
              Edit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CandidateEditProfile;
