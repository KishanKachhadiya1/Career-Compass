import React from "react";
import EmployerHeader from "../../components/EmployerHeader";
import "../../styles/candidatelist.css";
import "../../styles/candidatejoblist.css";

const candidatesJobList = [
  {
    id: 1,
    candidatename: "Kishan Kachhadiya",
    jobtitle: "Web Designer",
    applicationdate: "24th June, 2024",
    resume: "Download",
    status: "Applied",
  },
  {
    id: 2,
    candidatename: "Kirtan Chaklasiya",
    jobtitle: "MERN Stack Developer",
    applicationdate: "2nd May, 2024",
    resume: "Download",
    status: "Hired",
  },
  {
    id: 3,
    candidatename: "Jainil Patel",
    jobtitle: "Application Developer",
    applicationdate: "20th Jan, 2024",
    resume: "Download",
    status: "Rejected",
  },
];

const CandidateJobList = () => {
  return (
    <>
      <EmployerHeader />
      <section className="container candList candJobList">
        <h2 className="title textPrimary">Candidates Job List</h2>
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
                <th>Candidate Name</th>
                <th>Job Title</th>
                <th>Application Date</th>
                <th>Status</th>
                <th>Resume</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {candidatesJobList.map((candJobList) => (
                <tr key={candJobList.id}>
                  <td>{candJobList.candidatename}</td>
                  <td>{candJobList.jobtitle}</td>
                  <td><span className="createdOn">{candJobList.applicationdate}</span></td>
                  <td><span className="status">{candJobList.status}</span></td>
                  <td>{candJobList.resume}</td>
                  <td>
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

export default CandidateJobList;
