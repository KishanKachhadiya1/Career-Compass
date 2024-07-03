// EmployerProfile.js
import React, { useState } from "react";
import EmployerHeader from "../../components/EmployerHeader";
import "../../styles/employerprofile.css";
import "../../styles/candidateprofile.css";
import Industry from "../../components/Industry";

const EmployerProfile = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    ceoName: "",
    size: "",
    ownershipType: "",
    establishedIn: "",
    country: "",
    state: "",
    city: "",
    industry: "",
    website: "",
    employerDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/auth/employer-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Failed to save profile. Server responded with ${response.status}: ${errorMessage}`
        );
      }

      const result = await response.json();
      console.log("Profile saved successfully:", result);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <>
      <EmployerHeader />
      <section className="container employerProfile candidateProfile">
        <h2 className="title textPrimary">Profile</h2>
        <div className="profileForm bgLightGrey rounded-6">
          <form onSubmit={handleSubmit}>
            <div className="profileGrid">
              <div className="formGroup">
                <label className="textPrimary dBlock">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company name *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">E-mail</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">CEO Name</label>
                <input
                  type="text"
                  name="ceoName"
                  value={formData.ceoName}
                  onChange={handleChange}
                  placeholder="CEO name *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Size</label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="Ex. 5-10 *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Ownership type</label>
                <input
                  type="text"
                  name="ownershipType"
                  value={formData.ownershipType}
                  onChange={handleChange}
                  placeholder="Ex. private, public *"
                  className="formControl"
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Established In</label>
                <input
                  type="text"
                  name="establishedIn"
                  value={formData.establishedIn}
                  onChange={handleChange}
                  placeholder="Ex. 2024 *"
                  className="formControl"
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
                <label className="textPrimary dBlock">Industry</label>
                <Industry setFormData={setFormData} />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Website</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="www.website.com *"
                  className="formControl"
                />
              </div>
              <div className="formGroup fullWidth">
                <label className="textPrimary dBlock">Employer Details</label>
                <textarea
                  rows={5}
                  name="employerDetails"
                  value={formData.employerDetails}
                  onChange={handleChange}
                  placeholder="Employer details.."
                  className="formControl"
                ></textarea>
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
