import React, { useState, useEffect } from "react";
import EmployerHeader from "../../components/EmployerHeader";
import "../../styles/employerprofile.css";
import "../../styles/candidateprofile.css";
import Industry from "../../components/Industry";

const EmployerEditProfile = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    phoneNumber: "",
    ceoName: "",
    size: "",
    ownershipType: "",
    country: "",
    state: "",
    city: "",
    industry: "",
    website: "",
    employerDetails: ""
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.email) {
          const response = await fetch(`http://localhost:8000/api/v1/auth/employer-profile?email=${user.email}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });

          if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Failed to fetch profile. Server responded with ${response.status}: ${errorMessage}`);
          }

          const profileData = await response.json();
          setFormData(profileData);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/v1/auth/employer-edit-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to update profile. Server responded with ${response.status}: ${errorMessage}`);
      }

      const result = await response.json();
      console.log("Profile updated successfully:", result);

    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <EmployerHeader />
      <section className="container employerProfile candidateProfile">
        <h2 className="title textPrimary">Edit Profile</h2>
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
                <Industry
                  setFormData={setFormData}
                  industry={formData.industry}
                />
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
              Edit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EmployerEditProfile;
