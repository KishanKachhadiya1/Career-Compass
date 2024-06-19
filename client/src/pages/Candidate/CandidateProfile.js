import React from "react";
import CandidateHeader from "../../components/CandidateHeader";
import "../../styles/candidateprofile.css";
import "../../components/SkillsDropdown";
import SkillsDropdown from "../../components/SkillsDropdown";
import LanguageDropdown from "../../components/LanguageDropdown";
import MaritalStatus from "../../components/MaritalStatus";

const CandidateProfile = () => {
  return (
    <>
      <CandidateHeader />
      <section className="container candidateProfile">
        <h2 className="title textPrimary">Profile</h2>
        <div className="profileForm bgLightGrey rounded-6">
          <form>
            <div className="profileGrid">
              <div className="formGroup">
                <label className="textPrimary dBlock">First Name</label>
                <input
                  type="text"
                  placeholder="First name *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Last Name</label>
                <input
                  type="text"
                  placeholder="Last name *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">E-mail</label>
                <input
                  type="email"
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
                <label className="textPrimary dBlock">Birth Date</label>
                <input
                  type="date"
                  placeholder="Birth date *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Gender</label>
                <div className="dFlex alignCenter">
                  <div className="radioGroup dFlex alignCenter">
                    <input type="radio" className="radioInput" name="gender" />
                    <label className="radioLabel">Male</label>
                  </div>
                  <div className="radioGroup dFlex alignCenter">
                    <input type="radio" className="radioInput" name="gender" />
                    <label className="radioLabel">Female</label>
                  </div>
                </div>
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Skills</label>
                <SkillsDropdown />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Languages</label>
                <LanguageDropdown />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Marital Status</label>
                <MaritalStatus />
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
                <label className="textPrimary dBlock">Experience</label>
                <input
                  type="text"
                  placeholder="Experience (ex. 1 year) *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Address</label>
                <input
                  type="text"
                  placeholder="Address *"
                  className="formControl"
                />
              </div>
            </div>
            <button class="btn bgPrimary textWhite">Save</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CandidateProfile;
