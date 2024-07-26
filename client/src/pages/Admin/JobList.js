import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/joblist.css";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/auth/admin/job-list", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to fetch jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const deleteJob = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/auth/admin/job-list/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setJobs(jobs.filter((job) => job._id !== id));
      } else {
        console.error("Failed to delete employer");
      }
    } catch (error) {
      console.error("Error deleting employer:", error);
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AdminHeader />
      <section className="container candList jobList">
        <h2 className="title textPrimary">Job List</h2>
        {error && <p className="error">{error}</p>}
        <div className="candSearch dFlex">
          <span className="rounded-6 dFlex justifyCenter alignCenter">
            <i className="fa-solid fa-magnifying-glass textPrimary"></i>
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="formControl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
              {filteredJobs.map((job) => (
                <tr key={job._id}>
                  <td>{job.jobTitle}</td>
                  <td>
                    <img src={job.logo} alt={`${job.employerName} logo`} />
                  </td>
                  <td>
                    <span className="dBlock textPrimary fwBold">{job.employerName}</span>
                    {job.employerEmail}
                  </td>
                  <td>
                    <span className="createdOn">{job.createdAt}</span>
                  </td>
                  <td>
                    <i className="fa-solid fa-pen-to-square textPrimary editIcon"></i>
                    <span onClick={() => deleteJob(job._id)} className="cursorPointer">
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

export default JobList;
