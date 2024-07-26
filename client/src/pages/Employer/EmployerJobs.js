import React, { useEffect, useState } from "react";
import "../../styles/employerjobs.css";
import "../../styles/candidatesavedjobs.css";
import EmployerHeader from "../../components/EmployerHeader";
import { Link } from "react-router-dom";

const EmployerJobs = () => {
  const [employerJobList, setEmployerJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/auth/employer/employer-jobs", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const jobs = await response.json();
        setEmployerJobList(jobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to fetch jobs");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const deleteJob = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/auth/employer/employer-jobs/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setEmployerJobList(employerJobList.filter((job) => job._id !== id));
      } else {
        console.error("Failed to delete job");
      }
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <>
      <EmployerHeader />
      <section className="candSavedJobs employerJobs container">
        <h2 className="title textPrimary">Jobs</h2>
        <div className="dFlex alignCenter justifyBetween">
          <div className="candSearch dFlex w-100 gridSearch">
            <span className="rounded-6 dFlex justifyCenter alignCenter">
              <i className="fa-solid fa-magnifying-glass textPrimary"></i>
            </span>
            <input
              type="text"
              placeholder="Search saved jobs..."
              className="formControl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
                <tr key={empJob._id}>
                  <td>{empJob.jobTitle}</td>
                  <td>
                    <span className="createdOn">{new Date(empJob.createdAt).toLocaleDateString()}</span>
                  </td>
                  <td>
                    <i className="fa-solid fa-pen-to-square textPrimary editIcon"></i>
                    <span onClick={() => deleteJob(empJob._id)} className="cursorPointer">
                      <i className="fa-solid fa-trash-can textDanger"></i>
                    </span>
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
