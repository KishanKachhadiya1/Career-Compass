import React from "react";
import "../../styles/candidatesavedjobs.css";
import CandidateHeader from "../../components/CandidateHeader";
// https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA
import candidateProfile from "../../images/candidateProfile.jpg";

const savedJobs = [
  {
    id: 1,
    jobTitle: "Web Designer",
    logo: candidateProfile,
    name: "Kishan Kachhadiya",
    email: "kishan@gmail.com",
    createdAt: "19th May, 2024"
  },
  {
    id: 2,
    jobTitle: "MERN stack Developer",
    logo: candidateProfile,
    name: "Kirtan Chaklasiya",
    email: "kirtan@gmail.com",
    createdAt: "24th June, 2024"
  },
  {
    id: 3,
    jobTitle: "Graphic Designer",
    logo: candidateProfile,
    name: "Jainil Patel",
    email: "jaimil@gmail.com",
    createdAt: "2nd April, 2024"
  },
];

const CandidateSavedJobs = () => {
  return (
    <>
      <CandidateHeader />
      <section className="candSavedJobs container">
        <h2 className="title textPrimary">Saved Jobs</h2>
        <div className="candSearch dFlex">
          <span className="rounded-6 dFlex justifyCenter alignCenter">
            <i class="fa-solid fa-magnifying-glass textPrimary"></i>
          </span>
          <input type="text" placeholder="Search saved jobs..." className="formControl" />
        </div>
        <div className="savedJobsTable candDataTable">
          <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Logo</th>
                <th>Employer Details</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {savedJobs.map((savedJob) => (
                <tr key={savedJob.id}>
                  <td>{savedJob.jobTitle}</td>
                  <td>
                    <img src={savedJob.logo} alt={`${savedJob.name} logo`} />
                  </td>
                  <td><span className="dBlock textPrimary fwBold">{savedJob.name}</span>{savedJob.email}</td>
                  <td><span className="createdAt">{savedJob.createdAt}</span></td>
                  <td>
                    <i className="fa-solid fa-bookmark textPrimary"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default CandidateSavedJobs;
