import React, { useState, useEffect } from "react";
import CandidateHeader from "../../components/CandidateHeader";
import "../../styles/candidateprofile.css";
import Skills from "../../components/Skills";
import Languages from "../../components/Languages";
import MaritalStatus from "../../components/MaritalStatus";

const CandidateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    experience: "",
    address: "",
    maritalStatus: "",
    skills: [],
    languages: [],
  });
  const [submitted, setSubmitted] = useState(false);

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
          console.log("Fetched profile data:", profileData);  
          
          if (profileData.birthDate) {
            profileData.birthDate = new Date(profileData.birthDate).toISOString().split('T')[0];
          }
          
          setFormData(profileData);

          if (profileData.email) {
            setSubmitted(true);
          }
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
      const response = await fetch(
        "http://localhost:8000/api/v1/auth/candidate-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to save profile. Server responded with ${response.status}: ${errorMessage}`);
      }

      const result = await response.json();
      console.log("Profile saved successfully:", result);

      localStorage.setItem("candidateProfile", JSON.stringify(result));
      setSubmitted(true);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <>
      <CandidateHeader />
      <section className="container candidateProfile">
        <h2 className="title textPrimary">Profile</h2>
        <div className="profileForm bgLightGrey rounded-6">
          <form onSubmit={handleSubmit}>
            <div className="profileGrid">
              <div className="formGroup">
                <label className="textPrimary dBlock">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name *"
                  className="formControl"
                  required
                  disabled={submitted}
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name *"
                  className="formControl"
                  required
                  disabled={submitted}
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail *"
                  className="formControl"
                  required
                  disabled={submitted}
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
                  required
                  disabled={submitted}
                />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  placeholder="Birth date *"
                  className="formControl"
                  required
                  disabled={submitted}
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
                      required
                      disabled={submitted}
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
                      required
                      disabled={submitted}
                    />
                    <label className="radioLabel">Female</label>
                  </div>
                </div>
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Skills</label>
                <Skills skills={formData.skills} setFormData={setFormData} required disabled={submitted} />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Languages</label>
                <Languages languages={formData.languages} setFormData={setFormData} required disabled={submitted} />
              </div>
              <div className="formGroup">
                <label className="textPrimary dBlock">Marital Status</label>
                <MaritalStatus maritalStatus={formData.maritalStatus} setFormData={setFormData} required disabled={submitted} />
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
                  required
                  disabled={submitted}
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
                  required
                  disabled={submitted}
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
                  required
                  disabled={submitted}
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
                  required
                  disabled={submitted}
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
                  required
                  disabled={submitted}
                />
              </div>
            </div>
            <button type="submit" className="btn bgPrimary textWhite" disabled={submitted}>
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CandidateProfile;
