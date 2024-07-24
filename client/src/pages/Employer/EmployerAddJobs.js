import React, { useState } from "react";
import EmployerHeader from "../../components/EmployerHeader";
import "../../styles/employerjobs.css";
import "../../styles/candidateprofile.css";
import Industry from "../../components/Industry";
import Skills from "../../components/Skills";
import JobShift from "../../components/JobShift";
import DegreeLevel from "../../components/DegreeLevel";
import { Link } from "react-router-dom";

const EmployerAddJobs = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    industry: "",
    skills: [],
    jobShift: "",
    degreeLevel: "",
    country: "",
    state: "",
    city: "",
    experience: "",
    gender: "both",
    salaryFrom: "",
    salaryTo: "",
    keyResponsibilities: "",
    benefits: "",
    jobDescription: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/v1/auth/employer-jobs/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to add job. Server responded with ${response.status}: ${errorMessage}`);
      }

      const result = await response.json();
      console.log("Job added successfully:", result);

    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <>
      <EmployerHeader />
      <section className="container employerProfile candidateProfile">
        <h2 className="title textPrimary">Add Job</h2>
        <div className="profileForm bgLightGrey rounded-6">
          <form onSubmit={handleSubmit}>
            <div className="profileGrid">
              <div className="formGroup">
                <label className="textPrimary dBlock">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job title *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Industry</label>
                <Industry
                  setFormData={setFormData}
                  industry={formData.industry}
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Skills</label>
                <Skills setFormData={setFormData} required  />

              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Job Shift</label>
                <JobShift
                  setFormData={setFormData} required
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Degree Level</label>
                <DegreeLevel
                  setFormData={setFormData} required
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
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
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                    <label className="radioLabel">Male</label>
                  </div>
                  <div className="radioGroup dFlex alignCenter">
                    <input
                      type="radio"
                      className="radioInput"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    <label className="radioLabel">Female</label>
                  </div>
                  <div className="radioGroup dFlex alignCenter">
                    <input
                      type="radio"
                      className="radioInput"
                      name="gender"
                      value="both"
                      checked={formData.gender === "both"}
                      onChange={handleChange}
                    />
                    <label className="radioLabel">Both</label>
                  </div>
                </div>
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Salary From</label>
                <input
                  type="text"
                  name="salaryFrom"
                  value={formData.salaryFrom}
                  onChange={handleChange}
                  placeholder="Ex. 40,000 *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Salary To</label>
                <input
                  type="text"
                  name="salaryTo"
                  value={formData.salaryTo}
                  onChange={handleChange}
                  placeholder="Ex. 50,000 *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Key Responsibilities</label>
                <textarea
                  rows={5}
                  name="keyResponsibilities"
                  value={formData.keyResponsibilities}
                  onChange={handleChange}
                  placeholder="Key Responsibilities.."
                  className="formControl"
                ></textarea>
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Benefits</label>
                <textarea
                  rows={5}
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleChange}
                  placeholder="Benefits.."
                  className="formControl"
                ></textarea>
              </div>
              <div className="formGroup fullWidth">
                <label className="textPrimary dBlock">Job Description</label>
                <textarea
                  rows={5}
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  placeholder="Job Description.."
                  className="formControl"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn bgPrimary textWhite">
              Add Job
            </button>
            <Link to="/employer/employer-jobs" type="submit" className="btn bgDarkGrey textPrimary ml-20">
              Cancel
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default EmployerAddJobs;
