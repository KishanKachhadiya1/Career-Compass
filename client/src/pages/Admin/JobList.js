import React from "react";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/joblist.css";
// https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA
import candidateProfile from "../../images/candidateProfile.jpg";

const jobList = [
  {
    id: 1,
    jobTitle: "Web Designer",
    logo: candidateProfile,
    name: "Kishan Kachhadiya",
    email: "kishan@gmail.com",
    createdOn: "19th May, 2024",
  },
  {
    id: 2,
    jobTitle: "MERN stack Developer",
    logo: candidateProfile,
    name: "Kirtan Chaklasiya",
    email: "kirtan@gmail.com",
    createdOn: "24th June, 2024",
  },
  {
    id: 3,
    jobTitle: "Graphic Designer",
    logo: candidateProfile,
    name: "Jainil Patel",
    email: "jaimil@gmail.com",
    createdOn: "2nd April, 2024",
  },
];

const JobList = () => {
  return (
    <>
      <AdminHeader />
      <section className="container candList jobList">
        <h2 className="title textPrimary">Job List</h2>
        <div className="candSearch dFlex">
          <span className="rounded-6 dFlex justifyCenter alignCenter">
            <i class="fa-solid fa-magnifying-glass textPrimary"></i>
          </span>
          <input type="text" placeholder="Search..." className="formControl" />
        </div>
        <div className="candDataTable">
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
                <th>Created On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobList.map((jobs) => (
                <tr key={jobs.id}>
                  <td>{jobs.jobTitle}</td>
                  <td>
                    <img src={jobs.logo} alt={`${jobs.name} logo`} />
                  </td>
                  <td>
                    <span className="dBlock textPrimary fwBold">
                      {jobs.name}
                    </span>
                    {jobs.email}
                  </td>
                  <td>
                    <span className="createdOn">{jobs.createdOn}</span>
                  </td>
                  <td>
                    <i class="fa-solid fa-pen-to-square textPrimary editIcon"></i>
                    <i class="fa-solid fa-trash-can textDanger"></i>
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

export default JobList;
