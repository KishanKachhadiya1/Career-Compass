import React from 'react'
import EmployerHeader from "../../components/EmployerHeader";
import "../../styles/employerjobs.css";
import "../../styles/candidateprofile.css";
import Industry from "../../components/Industry";
import Skills from "../../components/Skills";
import JobShift from "../../components/JobShift";
import DegreeLevel from "../../components/DegreeLevel";
import { Link } from "react-router-dom";

const EmployerEditJobs = () => {
  return (
    <>
     <EmployerHeader /> 
     <section className="container employerProfile candidateProfile">
        <h2 className="title textPrimary">Edit Job</h2>
        <div className="profileForm bgLightGrey rounded-6">
          <form>
            <div className="profileGrid">
              <div className="formGroup">
                <label className="textPrimary dBlock">Job Title</label>
                <input
                  type="text"
                  placeholder="Job title *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Industry</label>
                <Industry />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Skills</label>
                <Skills />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Job Shift</label>
                <JobShift />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Degree Level</label>
                <DegreeLevel />
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
                  <div className="radioGroup dFlex alignCenter">
                    <input
                      type="radio"
                      className="radioInput"
                      name="gender"
                      value="both"
                    />
                    <label className="radioLabel">Both</label>
                  </div>
                </div>
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Salary From</label>
                <input
                  type="text"
                  placeholder="Ex. 40,000 *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Salary To</label>
                <input
                  type="text"
                  placeholder="Ex. 50,000 *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">
                  Key Responsibilities
                </label>
                <textarea
                  rows={5}
                  placeholder="Key Responsibilities.."
                ></textarea>
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Benefits</label>
                <textarea rows={5} placeholder="Benefits.."></textarea>
              </div>
              <div className="formGroup fullWidth">
                <label className="textPrimary dBlock">Job Description</label>
                <textarea rows={5} placeholder="Job Description.."></textarea>
              </div>
            </div>
            <button type="submit" className="btn bgPrimary textWhite">
              Edit Job
            </button>
            <Link to="/employer/employer-jobs" type="submit" className="btn bgDarkGrey textPrimary ml-20">
              Cancel
            </Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default EmployerEditJobs
