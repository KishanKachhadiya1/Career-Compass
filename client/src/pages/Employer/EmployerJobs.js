import React from "react";
import "../../styles/employerjobs.css";
import "../../styles/candidatesavedjobs.css";
import EmployerHeader from "../../components/EmployerHeader";
import { Link } from "react-router-dom";

const employerJobList = [
  {
    id: 1,
    jobTitle: "Web Designer",
    createdOn: "19th May, 2024",
  },
  {
    id: 2,
    jobTitle: "MERN stack Developer",
    createdOn: "24th June, 2024",
  },
  {
    id: 3,
    jobTitle: "Graphic Designer",
    createdOn: "2nd April, 2024",
  },
];

const EmployerJobs = () => {
  return (
    <>
      <EmployerHeader />
      <section className="candSavedJobs employerJobs container">
        <h2 className="title textPrimary">Jobs</h2>
        <div className="dFlex alignCenter justifyBetween">
          <div className="candSearch dFlex w-100 gridSearch">
            <span className="rounded-6 dFlex justifyCenter alignCenter">
              <i class="fa-solid fa-magnifying-glass textPrimary"></i>
            </span>
            <input
              type="text"
              placeholder="Search saved jobs..."
              className="formControl"
            />
          </div>
          <Link
            to="/employer/employer-jobs/add"
            className="btn bgPrimary textWhite addJobButton"
          >
            Add Jobs
          </Link>
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
                <th>Created On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employerJobList.map((empJob) => (
                <tr key={empJob.id}>
                  <td>{empJob.jobTitle}</td>
                  <td>
                    <span className="createdOn">{empJob.createdOn}</span>
                  </td>
                  <td>
                    <Link to="/employer/employer-jobs/edit">
                      <i class="fa-solid fa-pen-to-square textPrimary editIcon"></i>
                    </Link>
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

export default EmployerJobs;
