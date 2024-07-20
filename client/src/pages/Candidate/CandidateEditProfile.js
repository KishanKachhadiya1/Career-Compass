import React, { useState, useEffect } from "react";
import CandidateHeader from "../../components/CandidateHeader";
import "../../styles/candidateprofile.css";
import Skills from "../../components/Skills";
import Languages from "../../components/Languages";
import MaritalStatus from "../../components/MaritalStatus";

const CandidateEditProfile = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    experience: "",
    address: "",
    skills: [],
    languages: [],
    maritalStatus: ""
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.email) {
          const response = await fetch(`http://localhost:8000/api/v1/auth/candidate-profile?email=${user.email}`, {
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
      const response = await fetch("http://localhost:8000/api/v1/auth/candidate-edit-profile", {
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

      // Optionally update localStorage or other state management
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <CandidateHeader />
      <section className="container candidateProfile">
        <h2 className="title textPrimary">Edit Profile</h2>
        <div className="profileForm bgLightGrey rounded-6">
          <form onSubmit={handleSubmit}>
            <div className="profileGrid">
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
                </div>
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Skills</label>
                <Skills setFormData={setFormData} skills={formData.skills} />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Languages</label>
                <Languages setFormData={setFormData} languages={formData.languages} />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Marital Status</label>
                <MaritalStatus setFormData={setFormData} maritalStatus={formData.maritalStatus} />
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
                <label className="textPrimary dBlock">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address *"
                  className="formControl"
                />
              </div>
            </div>
            <button type="submit" className="btn bgPrimary textWhite">
              Update
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CandidateEditProfile;
